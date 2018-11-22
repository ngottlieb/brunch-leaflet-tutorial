# Brunch + LeafletJS

This is an example app for using the [`brunch-leaflet-es6-skeleton`](https://github.com/ngottlieb/brunch-leaflet-es6-skeleton).

For more info, check out this blog post http://www.nicholasgottlieb.com/2018/11/22/easy-single-page-javascript-map-applications-with-brunch-io-and-leafletjs/.

## Installation

Clone this repo manually or use `brunch new your-project -s ngottlieb/brunch-leaflet-es6-skeleton`

## Getting started

* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * Brunch plugins and app dependencies: `npm install`
* Run:
    * `npm start` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `npm run build` — builds minified project for production
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)
