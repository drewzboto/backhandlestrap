define([
  "app",

  // Libs
  "backbone"

  // Modules

  // Plugins
],

function(app, Backbone) {

  // Create a new module
  var Home = app.module();

  // This will fetch the tutorial template and render it.
  Home.Views.Index = Backbone.View.extend({
    template: "home",

    serialize: function() {
      return { name: "World" };
    }
  });

  // Required, return the module for AMD compliance
  return Home;

});
