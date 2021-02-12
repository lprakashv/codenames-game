(ns reframe-codenames.events
  (:require
    [re-frame.core :as re-frame]
    [reframe-codenames.db :as db]
    [reframe-codenames.utils :as utils]
    [day8.re-frame.tracing :refer [fn-traced]]))

(re-frame/reg-event-db
 ::initialize-db
 (fn-traced [_ _]
            (db/default-db)))

(re-frame/reg-event-db
 ::toggle-turn
 (fn-traced [d _]
            (let [new-turn (utils/opp-color (:turn d))]
              (merge d
                     {:turn       new-turn
                      :message    (utils/get-messsage-for-type :turn-message new-turn)
                      :turn-over? false
                      :hint       ""
                      :limit      0}))))

(re-frame/reg-event-db
 ::toggle-spy-master
 (fn-traced [d _]
            (let [{:keys [spy-master? hint limit turn]} d
                  valid-hint?                           (and
                                                         (> limit 0)
                                                         (not (clojure.string/blank? hint)))]
              (cond
                (or (not spy-master?) valid-hint?) (-> d
                                                       (assoc :spy-master? (not spy-master?))
                                                       (assoc :message (utils/get-messsage-for-type :turn-message turn)))
                :else                              (-> d
                                                       (assoc :message (utils/get-messsage-for-type :spy-master-exit-error)))))))

(re-frame/reg-event-db
 ::open-tile
 (fn-traced [d [_ i j]]
            (let [index                                (+ (* i 5) j)
                  turn                                 (:turn d)
                  {{{tile-color :color} index} :board} d]
              (as-> d v
                    (assoc-in v [:board index :open?] true)
                    (update v :limit dec)
                    (assoc v :turn-over?
                           (or
                            (= (utils/opp-color turn) tile-color)
                            (zero? (:limit v))))
                    (if (:turn-over? v)
                      (merge v
                             {:message (utils/get-messsage-for-type :open-tile-turn-over)
                              :hint    ""
                              :limit   0})
                      v)))))

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

(re-frame/reg-event-db
 ::announce-winner
 (fn-traced [d [_ winner]]
            (-> d
                (merge
                 {:game-over?  true
                  :spy-master? true
                  :message     (utils/get-messsage-for-type :winner-announcement winner)}))))
