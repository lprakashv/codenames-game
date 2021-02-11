(ns reframe-codenames.css
  (:require [garden.def :refer [defstyles defcssfn]]
            [garden.stylesheet :refer [at-import at-media]]
            [garden.units :refer [px em rem]]))

(defcssfn url)

(defstyles screen
  [:.App {:text-align "center"}])
