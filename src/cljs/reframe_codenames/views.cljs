(ns reframe-codenames.views
  (:require
    [re-frame.core :as re-frame]
    [reframe-codenames.subs :as subs]
    [reframe-codenames.events :as events]
    [reframe-codenames.utils :as utils])
  (:require
    ["react-bootstrap"
     :refer
     [Card
      Button
      ButtonGroup
      Row
      Col
      Badge
      Container
      Accordion
      FormControl
      InputGroup
      Alert]]
    ["react-bootstrap/Card" :refer [Body Header Footer]]
    ["react-bootstrap/Accordion"
     :refer [Toggle Collapse]
     :rename {Toggle   AccToggle
              Collapse AccCollapse}]
    ["react-bootstrap/InputGroup"
     :refer [Text Prepend Append]
     :rename {Text    IGText
              Prepend IGPrepend
              Append  IGAppend}]
    ["react-social-icons" :refer [SocialIcon]]))

; TODO - simplify booleans everywhere!

(def row-style
  {:fluid :true :style {:margin 5} :class-name :justify-content-md-center})

(defn rules-header [rules]
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
            :style    {:border-radius   2
                       :padding         5
                       :width           "100%"
                       :height          "10vh"
                       :justify-content :center
                       :font-size       "2.5vmin"
                       :color           (when (or open? spy-master?) color)}
            :disabled (or spy-master? open? disable?)
            :size     :sm
            :on-click #(re-frame/dispatch
                         ; TODO - remove logic from view!
                         (if (= color :black)
                           [::events/announce-winner (utils/opp-color turn)]
                           [::events/open-tile row-index col-index]))}
           (:word item)]]))
     items)])

(defn grid [board-tiles turn spy-master? disable?]
  (->> (partition 5 board-tiles)
       (map-indexed
         #(grid-row %1 %2 turn spy-master? disable?))))

(defn hint-badge [hint]
  (when (not (clojure.string/blank? hint))
    [:h2 [:> Badge {:variant :info} (str "Hint: " hint)]]))

(defn limit-left-badge [limit]
  (when (not (zero? limit))
    [:h2 [:> Badge {:variant :warning} (str "Limit: " limit)]]))

(defn reds-left-count-badge [cnt]
  [:h2 [:> Badge {:variant :danger} (str "Reds left:" cnt)]])

(defn blues-left-count-badge [cnt]
  [:h2 [:> Badge {:variant :primary} (str "Blues left:" cnt)]])

(defn hint-limit-input-group [hint limit spy-master? game-over? turn-over?]
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
     :value     limit}]])

(defn spy-master-toggle-button [game-over? spy-master?]
  (when (not game-over?)
    [:>
     Button
     {:variant :warning :on-click #(re-frame/dispatch [::events/toggle-spy-master])}
     (if spy-master? "Over to team" "Spy Master")]))

(defn turn-change-button [turn game-over? spy-master?]
  (when (and (not game-over?) spy-master?)
    [:>
     Button
     {:disabled (not spy-master?)
      :variant  (if (= turn :red) :primary :danger)
      :on-click #(re-frame/dispatch [::events/toggle-turn])}
     (str "Make " (utils/capitalize (utils/opp-color turn)) "'s Turn")]))

(defn new-game-button []
  [:>
   Button
   {:fluid    true
    :variant  :success
    :style    {:margin 5}
    :on-click #(re-frame/dispatch [::events/initialize-db])}
   "New Game"])

(defn contact-footer [name label-with-url-list]
  [:p {:class-name :text-muted} (str "Creator: " name)]
  (map (fn [attrs] [:> SocialIcon attrs]) label-with-url-list))

(defn main-panel []
  ; TODO - split this main-panel into multpple functions having their own subscriptions
  (let [spy-master? @(re-frame/subscribe [::subs/spy-master?])
        board-tiles @(re-frame/subscribe [::subs/board])
        turn @(re-frame/subscribe [::subs/turn])
        red-left (utils/left-tiles-count-by-color board-tiles :red)
        blue-left (utils/left-tiles-count-by-color board-tiles :blue)
        turn-over? @(re-frame/subscribe [::subs/turn-over?])
        hint @(re-frame/subscribe [::subs/hint])
        limit @(re-frame/subscribe [::subs/limit])
        message @(re-frame/subscribe [::subs/message])
        game-over? @(re-frame/subscribe [::subs/game-over?])]
    (when (zero? red-left) (re-frame/dispatch-sync [::events/announce-winner :red]))
    (when (zero? blue-left) (re-frame/dispatch-sync [::events/announce-winner :blue]))
    [:>
     Card
     {:style {:border-radius 10 :margin 5}}
     [:>
      Header
      [:h1 {:style {:background-color :gold :padding 10}} "Codenames Game"]
      (rules-header utils/rules)]
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
           {:style {:width "100vw"}}
           (hint-limit-input-group hint limit spy-master? game-over? turn-over?)]]
         [:>
          Row
          row-style
          [:>
           Col
           {:style {:width "50vw"}}
           (hint-badge hint)]
          [:>
           Col
           {:style {:width "50vw"}}
           (limit-left-badge limit)]])
       [:>
        Row
        row-style
        [:>
         Col
         {:style {:width "50vw"}}
         (reds-left-count-badge red-left)]
        [:>
         Col
         {:style {:width "50vw"}}
         (blues-left-count-badge blue-left)]]
       [:>
        Row
        row-style
        [:>
         Alert
         {:style {:width "100vw"} :variant (:status message)}
         [:h4 (:text message)]]]
       ; TODO - remove logic from views (or make this a separate function)
       (grid board-tiles turn spy-master? (or game-over? (clojure.string/blank? hint) (< limit 1) turn-over?))
       [:>
        Row
        {:class-name :justify-content-md-center}
        [:>
         Col
         {:style {:width "100vw"}}
         [:>
          ButtonGroup
          {:fluid :true :vertical :true :style {:margin 5}}
          (spy-master-toggle-button game-over? spy-master?)
          (turn-change-button turn game-over? spy-master?)]]]
       [:>
        Row
        [:>
         Col
         {:style {:width "100vw"}}
         (new-game-button)]]]]
     [:>
      Footer
      (contact-footer "Lalit Prakash Vatsal"
                      [{:label :twitter :url "https://twitter.com/lprakashv"}
                       {:label :linkedin :url "https://www.linkedin.com/in/lalit-vatsal-ab921879/"}
                       {:label :github :url "https://github.com/lprakashv"}
                       {:label :medium :url "https://medium.com/@lprakashv"}])]]))
