BackHandleStrap v0.0.1
=============================

Heavily influenced by Tim Branyen [@tbranyen](http://twitter.com/tbranyen) and his sample applications at 
[boilerplat-handlebars-layoutmanager](https://github.com/tbranyen/boilerplate-handlebars-layoutmanager) and [bbb](https://github.com/tbranyen/backbone-boilerplate). I did update some libraries (RequireJS, Grunt-contribs) to reflect progress made by these libraries in standardizing some functionality (such as AMD Shims, Grunt plugins etc)

Provides a sample application combining:
* [Twitter Bootstrap 2.0.4](http://twitter.github.com/bootstrap/index.html)
* [Backbone.js 0.9.2](http://backbonejs.org/)
* [Backbone Layout Manager 0.5.2](https://github.com/tbranyen/backbone.layoutmanager)
* [Handlebars 1.0.beta.6](http://handlebarsjs.com/)
* [JQuery 1.7.2](http://jquery.com/)
* [Modernizr 2.5.3](http://modernizr.com/)
* [RequireJS 2.0.4](http://requirejs.org/)

The goal initially was to test out the various build and packaging tools for single page client-side javascript applications. Currently included:
* [Grunt 0.3.12](https://github.com/cowboy/grunt)

Upcoming build and packaging tools:
* [Brunch](http://brunch.io/)
* [Yeoman](http://yeoman.io/)

## Building and Running ##

* Install [NodeJS 0.80](http://nodejs.org/) for npm
* Install grunt via 'npm install -g grunt'
* Install dependencies in the grunt folder via 'npm install'
* Run 'grunt' to compile
* Run 'grunt launch' to launch the server and watch files for recompilation
* Open your browser to http://localhost:8080

