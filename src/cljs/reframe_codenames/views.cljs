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

(defn grid-row [row-index items spy-master? disable?]
  [:>
   Row
   {:key (str "grid-row-" row-index) :class-name :justify-content-md-center}
   (map-indexed
    (fn [col-index item]
      (let [open? (or (:open? item) spy-master?)
            color (:color item)]
        [:>
         Col
         {:key   (str "grid-cell-" (+ (* row-index 5) col-index))
          :sm    2
          :xs    2
          :style {:margin 5 :padding 0}}
         [:>
          Button
          {:class    [:board-grid-btn]
           :variant  :light
           :style    (update
                      {:border-radius   2
                       :padding         5
                       :width           "100%"
                       :height          "10vmin"
                       :justify-content :center
                       :font-size       "2.5vmin"}
                      :color (if open? (fn [_] color) identity))
           :disabled (or open? disable?)
           :size     :sm
           :on-click #(re-frame/dispatch [::events/open-tile row-index col-index])}
          (:word item)]]))
    items)])

(defn grid [board-tiles spy-master? disable?]
  (->> (partition 5 board-tiles)
       (map-indexed
        #(grid-row %1 %2 spy-master? disable?))))

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
        message      @(re-frame/subscribe [::subs/message])]
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
       {:style {:padding 10}}
       [:>
        Row
        {:fluid :true :style {:margin 10} :class-name :justify-content-md-center}
        [:>
         Col
         {:sm 12}
         [:>
          InputGroup
          {:size :lg}
          [:>
           IGPrepend
           [:>
            IGText
            "Hint"]]
          [:>
           FormControl
           {:disabled  (or (not spy-master?) turn-over?)
            :on-change #(re-frame/dispatch [::events/set-hint (-> % .-target .-value)])
            :value     hint}]
          [:>
           IGAppend
           [:>
            IGText
            "Limit"]]
          [:>
           FormControl
           {:disabled  (or (not spy-master?) turn-over?)
            :on-change #(re-frame/dispatch [::events/set-limit (-> % .-target .-value)])
            :value     limit}]]]]
       [:>
        Row
        {:fluid :true :style {:margin 5} :class-name :justify-content-md-center}
        [:>
         Col
         {:sm 4}
         [:h2 [:> Badge {:variant :danger} (str "Reds left:" red-left)]]]
        [:>
         Col
         {:sm 4}
         [:h4
          [:>
           Badge
           {:variant (:status message) :style {:color :white}}
           (:text message)]]]
        [:>
         Col
         {:sm 4}
         [:h2 [:> Badge {:variant :primary} (str "Blues left:" blue-left)]]]]
       (grid board-tiles spy-master? (or (clojure.string/blank? hint) (< limit 1) turn-over?))
       [:>
        Row
        {:class-name :justify-content-md-center}
        [:>
         Col
         {:sm 12}
         [:>
          ButtonGroup
          {:fluid :true :vertical :true :style {:margin 5}}
          [:>
           Button
           {:variant :warning :on-click #(re-frame/dispatch [::events/toggle-spy-master])}
           (if spy-master? "Over to team" "Spy Master")]
          (if spy-master?
            [:>
             Button
             {:disabled (not spy-master?)
              :variant  :info
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
