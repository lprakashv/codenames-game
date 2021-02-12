(ns reframe-codenames.views
  (:require
    [re-frame.core :as re-frame]
    [re-com.core :as re-com]
    [reframe-codenames.subs :as subs]
    [clojure.string :refer [join]]
    [reframe-codenames.events :as events]
    [reframe-codenames.utils :as utils])
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
      InputGroup
      Alert]]
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

(def row-style
  {:fluid :true :style {:margin 5} :class-name :justify-content-md-center})

(defn header-rules []
  [:>
   Accordion
   {:defaultActiveKey "0"}
   [:>
    Card
    [:>
     AccToggle
     {:as Header :eventKey "0"}
     [:h4 "Click to show/hide Rules"]]
    [:>
     AccCollapse
     {:eventKey "0"}
     [:>
      Body
      (map-indexed
       (fn [index rule] [:p {:style {:text-align :left}} (str (inc index) ". " rule)])
       utils/rules)]]]])

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
      (let [{:keys [open? color]} item]
        [:>
         Col
         {:key   (str "grid-cell-" (+ (* row-index 5) col-index))
          :style {:width   "20vw"
                  :padding 0
                  :margin  2}}
         [:>
          Button
          {:key      (str "grid-cell-" (+ (* row-index 5) col-index))
           :class    [:board-grid-btn]
           :variant  (if (and spy-master? open?) :info :light)
           :style    (update
                      {:border-radius   2
                       :padding         5
                       :width           "100%"
                       :height          "10vh"
                       :justify-content :center
                       :font-size       "2.3vmin"}
                      :color (if (or open? spy-master?) (fn [_] color) identity))
           :disabled (or spy-master? open? disable?)
           :size     :sm
           :on-click #(re-frame/dispatch
                       (if (= color :black)
                         [::events/announce-winner (utils/opp-color turn)]
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
        red-left     (utils/left-tiles-count-by-color board-tiles :red)
        blue-left    (utils/left-tiles-count-by-color board-tiles :blue)
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
          row-style
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
          row-style
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
        row-style
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
        row-style
        [:>
         Alert
         {:sm 12 :variant (:status message)}
         [:h4 (:text message)]]]
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
             (str "Make " (utils/capitalize (utils/opp-color turn)) "'s Turn")])]]]
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
