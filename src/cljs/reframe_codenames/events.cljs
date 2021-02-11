(ns reframe-codenames.events
  (:require
    [re-frame.core :as re-frame]
    [reframe-codenames.db :as db]
    [day8.re-frame.tracing :refer [fn-traced]]))

(re-frame/reg-event-db
 ::initialize-db
 (fn-traced [d e]
            (db/default-db)))

(defn opp-color [color]
  (if (= color :red) :blue :red))

(defn capitalize [s]
  (clojure.string/capitalize (name s)))

(defn get-messsage-for-type
  ([tpe]
   (case tpe
     :open-tile-turn-over   {:status :info
                             :text   "Turn over! Spymaster, toggle turn and set hint."}
     :spy-master-exit-error {:status :error :text "Add hint with a number"}))
  ([tpe arg]
   (case tpe
     :turn-message {:status (if (= arg :red) :danger :primary)
                    :text   (str (capitalize arg) "'s turn")})))

(re-frame/reg-event-db
 ::toggle-turn
 (fn-traced [d _]
            (let [new-turn (opp-color (:turn d))]
              (-> d
                  (assoc :turn new-turn)
                  (assoc :message (get-messsage-for-type :turn-message new-turn))
                  (assoc :turn-over? false)
                  (assoc :hint "")
                  (assoc :limit 0)))))

(re-frame/reg-event-db
 ::toggle-spy-master
 (fn-traced [d _]
            (let [spy-master? (:spy-master? d)
                  hint        (:hint d)
                  limit       (:limit d)
                  turn        (:turn d)]
              (cond
                (or
                 (not spy-master?)
                 (and
                  (> limit 0)
                  (not (clojure.string/blank? hint))))
                (-> d
                    (assoc :spy-master? (not spy-master?))
                    (assoc :message (get-messsage-for-type :turn-message turn)))
                :else (-> d
                          (assoc :message (get-messsage-for-type :spy-master-exit-error)))))))

(re-frame/reg-event-db
 ::open-tile
 (fn-traced [d [_ i j]]
            (let [index      (+ (* i 5) j)
                  turn       (:turn d)
                  tile-color (get-in d [:board index :color])
                  limit      (:limit d)
                  turn-over? (or
                              (= (opp-color turn) tile-color)
                              (<= limit 1))]
              (-> d
                  (assoc-in [:board index :open?] true)
                  (update :limit (if (= tile-color turn) dec identity))
                  (assoc :turn-over? turn-over?)
                  (update :message
                          (if turn-over?
                            (fn [_] (get-messsage-for-type :open-tile-turn-over))
                            identity))
                  (update :hint (if turn-over? (fn [_] "") identity))
                  (update :limit (if turn-over? (fn [_] 0) identity))))))

(re-frame/reg-event-db
 ::set-hint
 (fn-traced [d [_ text]]
            (-> d
                (assoc :hint text))))

(re-frame/reg-event-db
 ::set-limit
 (fn-traced [d [_ limit]]
            (-> d
                (assoc :limit (int limit)))))
