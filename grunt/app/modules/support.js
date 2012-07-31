define([
  "app",

  // Libs
  "backbone"

  // Modules

  // Plugins
],

function(app, Backbone) {

  // Create a new module
  var Support = app.module();

  // This will fetch the tutorial template and render it.
  Support.Views.Index = Backbone.View.extend({
    template: "support",

    serialize: function() {
      return { };
    }
  });

  // Required, return the module for AMD compliance
  return Support;

});
