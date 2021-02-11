(ns reframe-codenames.views
  (:require
    [re-frame.core :as re-frame]
    [re-com.core :as re-com]
    [reframe-codenames.subs :as subs]
    [clojure.string :refer [join]]
    [reframe-codenames.events :as events])
  (:require
    ["react-bootstrap"
     :refer
     [Card
      Button
      ButtonGroup
      ListGroup
      Row
      Col
      Badge
      Container
      Jumbotron
      ToggleButton
      Accordion
      Form
      FormControl
      InputGroup]]
    ["react-bootstrap/Card" :refer [Text Body Header Footer Title Subtitle]]
    ["react-bootstrap/ListGroup" :refer [Item]]
    ["react-bootstrap/Accordion"
     :refer  [Toggle Collapse]
     :rename {Toggle   AccToggle
              Collapse AccCollapse}]
    ["react-bootstrap/InputGroup"
     :refer  [Text Prepend Append]
     :rename {Text    IGText
              Prepend IGPrepend
              Append  IGAppend}]
    ["react-social-icons" :refer [SocialIcon]]))

(def rules ["Have 2 teams, one \"red\" (first turn) and the other blue."
            "Choose a person randomly from each team as a spy-master, only he/she can use the spy-master button and see the color of all the words"
            "The spy master gives a \"single\" word as a hint and and a number (say 3)."
            "Then his/her team members choose/open different words (max 3, the number given by their spy master). Their turn gets over as soon as the team uncover any word of different color that their own team or they voluntarily end their turn."
            "Goal of each team is to finish up their color words."
            "There are 9 reds (first-turn), 8 blues, 7 greys (civilians) and one back (assassin) words."
            "A team instantly loses if they uncover a black (assassin) word."])

(defn header-rules []
  [:>
   Accordion
   {:defaultActiveKey "0"}
   [:>
    Card
    [:>
     AccToggle
     {:as Header :eventKey "0"}
     [:h4 "Rules"]]
    [:>
     AccCollapse
     {:eventKey "0"}
     [:>
      Body
      (map-indexed
       (fn [index rule] [:p {:style {:text-align :left}} (str (inc index) ". " rule)])
       rules)]]]])

(defn grid-row [row-index items turn spy-master? disable?]
  [:>
   Row
   {:key        (str "grid-row-" row-index)
    :fluid      :true
    :class-name :justify-content-md-center
    :margin     5
    :padding    5}
   (map-indexed
    (fn [col-index item]
      (let [open? (:open? item)
            color (:color item)]
        [:>
         Col
         {:key   (str "grid-cell-" (+ (* row-index 5) col-index))
          :sm    2
          :xs    2
          :style {:margin 1 :padding 1}}
         [:>
          Button
          {:class    [:board-grid-btn]
           :variant  (if (and spy-master? open?) :info :light)
           :style    (update
                      {:border-radius   2
                       :padding         5
                       :width           "100%"
                       :height          "10vmin"
                       :justify-content :center
                       :font-size       "2.5vmin"}
                      :color (if (or open? spy-master?) (fn [_] color) identity))
           :disabled (or spy-master? open? disable?)
           :size     :sm
           :on-click #(re-frame/dispatch
                       (if (= color :black)
                         [::events/announce-winner (events/opp-color turn)]
                         [::events/open-tile row-index col-index]))}
          (:word item)]]))
    items)])

(defn grid [board-tiles turn spy-master? disable?]
  (->> (partition 5 board-tiles)
       (map-indexed
        #(grid-row %1 %2 turn spy-master? disable?))))

(defn main-panel []
  (let [spy-master?  @(re-frame/subscribe [::subs/spy-master?])
        board-tiles  @(re-frame/subscribe [::subs/board])
        turn         @(re-frame/subscribe [::subs/turn])
        red-left     (->> board-tiles
                          (filter
                           #(and
                             (not (:open? %))
                             (= :red (:color %))))
                          (count))
        blue-left    (->> board-tiles
                          (filter
                           #(and
                             (not (:open? %))
                             (= :blue (:color %))))
                          (count))
        turn-over?   @(re-frame/subscribe [::subs/turn-over?])
        hint         @(re-frame/subscribe [::subs/hint])
        limit        @(re-frame/subscribe [::subs/limit])
        message      @(re-frame/subscribe [::subs/message])
        game-over?   @(re-frame/subscribe [::subs/game-over?])]
    (when (zero? red-left) (re-frame/dispatch-sync [::events/announce-winner :red]))
    (when (zero? blue-left) (re-frame/dispatch-sync [::events/announce-winner :blue]))
    [:>
     Card
     {:style {:border-radius 10 :margin 5}}
     [:>
      Header
      [:h1 {:style {:background-color :gold :padding 10}} "Codenames Game"]
      (header-rules)]
     [:>
      Body
      {:style {:background-color (if spy-master? :black :lavender)}}
      [:>
       Container
       {:style {:padding 5}}
       (if spy-master?
         [:>
          Row
          {:fluid :true :style {:margin 5} :class-name :justify-content-md-center}
          [:>
           Col
           {:sm 12}
           [:>
            InputGroup
            {:size :sm}
            [:>
             IGPrepend
             [:>
              IGText
              "Hint"]]
            [:>
             FormControl
             {:disabled  (or game-over? (not spy-master?) turn-over?)
              :on-change #(re-frame/dispatch [::events/set-hint (-> % .-target .-value)])
              :value     hint}]
            [:>
             IGAppend
             [:>
              IGText
              "Limit"]]
            [:>
             FormControl
             {:disabled  (or game-over? (not spy-master?) turn-over?)
              :on-change #(re-frame/dispatch [::events/set-limit (-> % .-target .-value)])
              :value     limit}]]]])
       (if (not spy-master?)
         [:>
          Row
          {:fluid :true :style {:margin 5} :class-name :justify-content-md-center}
          [:>
           Col
           {:sm 6}
           (if (not (clojure.string/blank? hint))
             [:h2 [:> Badge {:variant :info} (str "Hint: " hint)]])]
          [:>
           Col
           {:sm 6}
           (if (not (zero? limit))
             [:h2 [:> Badge {:variant :warning} (str "Limit: " limit)]])]])
       [:>
        Row
        {:fluid :true :style {:margin 5} :class-name :justify-content-md-center}
        [:>
         Col
         {:sm 6}
         [:h2 [:> Badge {:variant :danger} (str "Reds left:" red-left)]]]
        [:>
         Col
         {:sm 6}
         [:h2 [:> Badge {:variant :primary} (str "Blues left:" blue-left)]]]]
       [:>
        Row
        {:fluid :true :style {:margin 5} :class-name :justify-content-md-center}
        [:>
         Col
         {:sm 12}
         [:h4
          [:>
           Badge
           {:variant (:status message) :style {:color :white}}
           (:text message)]]]]
       (grid board-tiles turn spy-master? (or game-over? (clojure.string/blank? hint) (< limit 1) turn-over?))
       [:>
        Row
        {:class-name :justify-content-md-center}
        [:>
         Col
         {:sm 12}
         [:>
          ButtonGroup
          {:fluid :true :vertical :true :style {:margin 5}}
          (if (not game-over?)
            [:>
             Button
             {:variant :warning :on-click #(re-frame/dispatch [::events/toggle-spy-master])}
             (if spy-master? "Over to team" "Spy Master")])
          (if (and (not game-over?) spy-master?)
            [:>
             Button
             {:disabled (not spy-master?)
              :variant  (if (= turn :red) :primary :danger)
              :on-click #(re-frame/dispatch [::events/toggle-turn])}
             (str "Make " (events/capitalize (events/opp-color turn)) "'s Turn")])]]]
       [:>
        Row
        [:>
         Col
         {:sm 12}
         [:>
          Button
          {:fluid    true
           :variant  :success
           :blink    true
           :style    {:margin 5}
           :on-click #(re-frame/dispatch [::events/initialize-db])}
          "New Game"]]]]]
     [:>
      Footer
      [:p {:class-name :text-muted} "Creator: Lalit Prakash Vatsal"]
      [:>
       SocialIcon
       {:url "https://twitter.com/lprakashv" :label :twitter}]
      [:>
       SocialIcon
       {:url "https://medium.com/@lprakashv" :label :medium}]
      [:>
       SocialIcon
       {:url "https://www.linkedin.com/in/lalit-vatsal-ab921879/" :label :linkedin}]
      [:>
       SocialIcon
       {:url "https://github.com/lprakashv" :label :github}]]]))
