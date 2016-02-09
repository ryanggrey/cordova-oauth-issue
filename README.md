# Cordova-plugin-inappbrowser Issue Demo

## Install
1. Clone this project
2. Run `npm install`
3. Run `bower install`

## Run
1. Run `ionic state reset`
2. Run `ionic build ios`
3. Run `ionic emulate ios`

## Expected Behaviour
1. On initial app load an cordova-plugin-inappbrowser should appear (displaying Google homepage).
2. Tapping "Done" should dismiss the cordova-plugin-inappbrowser.
3. Tapping page should now update "Touches" in top left corner and present a new cordova-plugin-inappbrowser.

## Observed Behaviour
Points 1 and 2 occur as expected. Tapping the page, as in point 3, does nothing.

## Notes
- Removing the line `popUp()` from `touch.js` resolves the issue; tapping on the page brings up the cordova-plugin-inappbrowser which can then be dismissed, and further taps continue to correctly bring up the cordova-plugin-inappbrowser. Also putting this line in a `$timeout` with a big enough delay solves the issue. Note that putting this line in a `$timeout` without a delay does not resolve the issue. This makes me think that something that cordova-plugin-inappbrowser relies on has yet to load when the issue occurs.
- I'm guessing the issue is one of two things:
  1. I'm using cordova-plugin-inappbrowser incorrectly.
  2. There is a bug in cordova-plugin-inappbrowser (or one of its dependencies).
