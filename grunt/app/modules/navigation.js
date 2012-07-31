define([
  "app",

  // Libs
  "backbone"

  // Modules

  // Plugins
],

function(app, Backbone) {

  // Create a new module
  var Navigation = app.module();

  Navigation.Model = Backbone.Model.extend({
    defaults: {
      active: 'index'
    }
  });

  // This will fetch the tutorial template and render it.
  Navigation.Views.Index = Backbone.View.extend({
    template: "navigation",

    initialize: function() {
      this.model.on("change", this.updateNav, this);
    },

    cleanup: function() {
      this.model.off("change", null, this);
    },    

    updateNav: function() {
      var el = $("#nav_" + this.model.get("active"));
      $("ul.nav li").removeClass("active");
      el.addClass("active");
    },

    serialize: function() {
      return this.model.toJSON();
    }
  });

  // Required, return the module for AMD compliance
  return Navigation;

});
