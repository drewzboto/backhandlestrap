define([
	"app",

	// Libs
	"backbone"

	// Modules

	// Plugins
],

function(app, Backbone) {

	// Create a new module
	var Cart = app.module();

	Cart.Model = Backbone.Model.extend({
		defaults: {
			"total-quantity": 0
		},

		url: function() {
			return "http://localhost:88080/restapi/carts/default";
		}
	});

	// This will fetch the tutorial template and render it.
	Cart.Views.Index = Backbone.View.extend({
		template: "cart",

		tag: "div",

		id: "cart",

		initialize: function() {
			//_.bindAll(this);
			app.on("login:success", this.retrieveCart, this);
			this.model.on('change', this.render, this);
		},

		cleanup: function() {
			this.model.off("change", null, this);
			app.off("login:success", null, this);
		},		

		retrieveCart: function() {
			this.model.fetch({
				success: function(model, response) {
					console.log("cart retrieved!");
					console.log(model);
				},
				error: function(model, response) {
					console.log("cart failed");
				}
			});
		},

		serialize: function() {
			return this.model.toJSON();
		}
	});

	// Required, return the module for AMD compliance
	return Cart;

});
