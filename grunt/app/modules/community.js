define([
  "app",

  // Libs
  "backbone"

  // Modules

  // Plugins
],

function(app, Backbone) {

  // Create a new module
  var Community = app.module();

  // This will fetch the tutorial template and render it.
  Community.Views.Index = Backbone.View.extend({
    template: "community",

    serialize: function() {
      return { };
    }
  });

  // Required, return the module for AMD compliance
  return Community;

});
