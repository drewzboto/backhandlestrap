define([
  "app",

  // Libs
  "backbone"

  // Modules

  // Plugins
],

function(app, Backbone) {

  // Create a new module
  var Docs = app.module();

  // This will fetch the tutorial template and render it.
  Docs.Views.Index = Backbone.View.extend({
    template: "docs",

    serialize: function() {
      return { };
    }
  });

  // Required, return the module for AMD compliance
  return Docs;

});
