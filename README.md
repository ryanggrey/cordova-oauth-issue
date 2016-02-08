# Cordova-oauth Issue Demo

## Install
1. Clone this project
2. Run `npm install`
3. Run `bower install`

## Run
1. Run `ionic state reset`
2. Run `ionic build ios`
3. Run `ionic emulate ios`

## Expected Behaviour
1. On initial app load an in-app-browser should appear (notifying of 400 error).
2. Tapping "Done" should dismiss the in-app-browser.
3. Tapping page should now update "Touches" in top left corner and present a new in-app-browser (again showing a 400 error).

## Observed Behaviour
Points 1 and 2 occur as expected. Tapping the page, as in point 3, does nothing.

## Notes
- The 400 error should be ignored. This is because we're calling function `google` without correct params. It has been confirmed that the same issue occurs (app stops responding to touch gestures) when using `google` function with correct params/authorisation.
- Removing the line `driveService.authenticate()` from `touch.js` resolves the issue; tapping on the page brings up the in-app-browser which can then be dismissed, and further taps continue to correctly bring up the in-app-browser. Also putting this line in a `$timeout` with a big enough delay solves the issue. Note that putting this line in a `$timeout` without a delay does not resolve the issue. This makes me think that something that ng-cordova-oauth/in-app-browser relies on has yet to load when the issue occurs.
- I'm guessing the issue is one of three things:
  1. I'm using ionic/angular/ng-cordova-oauth incorrectly.
  2. ng-cordova-oauth is using the in-app-browser plugin incorrectly.
  3. There is a bug in the in-app-browser plugin (or one of its dependencies).
