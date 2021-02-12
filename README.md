[![GitHub](https://img.shields.io/github/license/lprakashv/reframe-codenames?style=flat-square)](LICENSE)

# reframe-codenames

Logo coming soon...

This is a Static Web app to play Codenames game built on top of **clojurescript** and **re-frame**.

### Screenshots
Since, example speaks a thousand words!

Coming soon...

[**Play it Now!**](https://lprakashv.github.io/reframe-codenames/)

### Features:
* 400 built-in words.
* Random words assignment to 'red' and 'blue' color team on new game.
* Game reset (New game).
* "spy-master" mode for spy masters to see all the words' colors and decide a hint.
* Manual turn change or voluntary turn handover.
* Auto turn change on failing words (uncovering blue while red's turn or uncovering red while blue's turn).
* Auto game over and winner announcement after either a color exhaustion or uncovering "assassin" word tile.

### TODOs:
- [ ] Online playing capability.
    - [ ] Game join with ID / game creation page.
    - [ ] Persisting game state locally for a user and updating from the server via websockets.
    - [ ] Auto assigning teams and spy-master.
    - [ ] User word tile concensus feature (show voting of each teammate). 
- [ ] Code quality improvements.
    - [ ] Add tests.
    - [ ] Segregate utility functions from the views and events.
    - [ ] Add specs.

### Main Technologies (in no specific order):
* **clojure/clojurescript** - main programming language.
* **reagent** - react support for clojurescript with component creation with **hiccup** syntax using native EDN data format for clojure.
* **re-frame** - state management and events handling for reagent app.
* **react-social-icons** - react component for displaying social profile icons with links to my profiles.
* **react-bootstrap**.
