(ns reframe-codenames.utils)

(defn opp-color [color]
  (if (= color :red) :blue :red))

(defn capitalize [s]
  (clojure.string/capitalize (name s)))

(defn get-message-for-type
  ([tpe]
   (case tpe
     :open-tile-turn-over {:status :info
                           :text   "Turn over! Spymaster, toggle turn and set hint."}
     :spy-master-exit-error {:status :warning :text "Add hint with a number"}))
  ([tpe arg]
   (case tpe
     :turn-message {:status (if (= arg :red) :danger :primary)
                    :text   (str (capitalize arg) "'s turn")}
     :winner-announcement {:status :success
                           :text   (str "Game over. Winner is " (capitalize arg) "!")})))

(def rules ["Have 2 teams, one \"red\" (first turn) and the other blue."
            "Choose a person randomly from each team as a spy-master, only he/she can use the spy-master button and see the color of all the words"
            "The spy master gives a \"single\" word as a hint and and a number (say 3)."
            "Then his/her team members choose/open different words (max 3, the number given by their spy master). Their turn gets over as soon as the team uncover any word of different color that their own team or they voluntarily end their turn."
            "Goal of each team is to finish up their color words."
            "There are 9 reds (first-turn), 8 blues, 7 greys (civilians) and one back (assassin) words."
            "A team instantly loses if they uncover a black (assassin) word."])

(defn left-tiles-count-by-color [board-tiles color]
  (->> board-tiles
       (filter
        #(and
          (not (:open? %))
          (= color (:color %))))
       (count)))