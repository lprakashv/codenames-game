(ns reframe-codenames.subs
  (:require
    [re-frame.core :as re-frame]))

; TODO - improve all the subs taking other subscribe as signal functions

(re-frame/reg-sub
 ::name
 (fn [db]
   (:name db)))

(re-frame/reg-sub
 ::board
 (fn [db]
   (:board db)))

(re-frame/reg-sub
 ::spy-master?
 (fn [db]
   (:spy-master? db)))

(re-frame/reg-sub
 ::turn
 (fn [db]
   (:turn db)))

(re-frame/reg-sub
 ::turn-over?
 (fn [db]
   (:turn-over? db)))

(re-frame/reg-sub
 ::hint
 (fn [db]
   (:hint db)))

(re-frame/reg-sub
 ::limit
 (fn [db]
   (:limit db)))

(re-frame/reg-sub
 ::message
 (fn [db]
   (:message db)))

(re-frame/reg-sub
 ::game-over?
 (fn [db]
   (:game-over? db)))
