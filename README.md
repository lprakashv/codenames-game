[![GitHub](https://img.shields.io/github/license/lprakashv/reframe-codenames?style=flat-square)](LICENSE)

# reframe-codenames
<p align="center"><img src="public/logo192.png/"></p>

This is a Static Web app to play Codenames game built on top of **clojurescript** and **re-frame**.

### Screenshots
Since, example speaks a thousand words!

<p align="center">
  <img width="620" src="demos/Webscreenshot.png"/>
  <img width="270" src="demos/Mobscreencapture.gif"/>
</p>

[**Play it Now!**](https://lprakashv.github.io/codenames-spa/)

### Features:
* 400 built-in words.
* Random words assignment to 'red' and 'blue' color team on new game.
* Game reset (New game).
* "spy-master" mode for spy masters to see all the words' colors and decide a hint.
* Manual turn change or voluntary turn handover.
* Auto turn change on failing words (uncovering blue while red's turn or uncovering red while blue's turn).

### TODOs:
- [ ] Auto game over and winner announcement after either a color exhaustion or uncovering "assassin" word tile.

### Main Technologies (in no specific order):
* **clojure/clojurescript** - main programming language.
* **reagent** - react support for clojurescript.
* **re-frame** - state management and events handling.
* **react-social-icons** - for displaying social profile icons with links to my profiles.
* **bootstrap** - for standard styling.
