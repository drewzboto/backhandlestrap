// Set the require.js configuration for your application.
require.config({
  // Initialize the application with the main application file
  deps: ["main"],

  paths: {
    // JavaScript folders
    libs: "../assets/js/libs",
    plugins: "../assets/js/plugins",

    // Libraries
    jquery: "../assets/js/libs/jquery",
    underscore: "../assets/js/libs/underscore",
    backbone: "../assets/js/libs/backbone",
    handlebars: "../assets/js/libs/handlebars.runtime-1.0.0.beta.6",
    bootstrap: "../assets/js/libs/bootstrap",

    // Shim Plugin
    use: "../assets/js/plugins/use"
  },

  use: {
    backbone: {
      deps: ["use!underscore", "jquery"],
      attach: "Backbone"
    },

    underscore: {
      attach: "_"
    },

    handlebars: {
      attach: "Handlebars"
    },

    bootstrap: {
      deps: ["jquery"],
      attach: "Bootstrap"
    },

    "plugins/backbone.layoutmanager": {
      deps: ["use!backbone"]
    }
  }
});
