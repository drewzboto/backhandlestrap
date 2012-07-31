define([
	"app",

	// Libs
	"backbone"

	// Modules

	// Plugins
],

function(app, Backbone) {

	// Create a new module
	var Authentication = app.module();

	// The initial model
	Authentication.Model = Backbone.Model.extend({
		defaults: {
			authenticated: false,
			username: '',
			password: ''
		},

		url: function() {
			return "http://localhost:8080/restapi/authentication/";
		}
	});

	// This will fetch the tutorial template and render it.
	Authentication.Views.Index = Backbone.View.extend({
		template: "authentication",

		tagName: "div",

		id: "authentication",

		events: {
			"change #auth-username": "setUsername",
			"change #auth-password": "setPassword",
			"submit form": "login"
		},

		initialize: function() {
			_.bindAll(this, "login", "setUsername", "setPassword");
			this.model.on('change:authenticated', this.render, this);
		},

		cleanup: function() {
			this.model.off("change:authenticated", null, this);
		},		

		serialize: function() {
			return this.model.toJSON();
		},

		setUsername: function(e) {
			this.model.set({username: $("#auth-username").val()});
		},

		setPassword: function(e) {
			this.model.set({password: $("#auth-password").val()});
		},

		login: function(e) {
			e.preventDefault();
			this.model.save(null, {
				success: function(model, response) {
					model.set("authenticated", true);
					app.trigger("login:success");
				},
				error: function(model, response) {
					var template = app.getTemplate("error");
					var data = { "msg": "The username/password combination was invalid." }; // TODO localize
					var errormsg = template(data);
					$("#login-errors").empty().append(errormsg);
				}
			});
		}
	});

	// Required, return the module for AMD compliance
	return Authentication;

});
