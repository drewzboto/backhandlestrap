// Set the require.js configuration for your application.
requirejs.config({
	// Initialize the application with the main application file
	deps: ["main"],

	paths: {
		// JavaScript folders
		libs: "../assets/js/libs",

		// Libraries
		jquery: "../assets/js/libs/jquery",
		underscore: "../assets/js/libs/underscore",
		backbone: "../assets/js/libs/backbone",
		handlebars: "../assets/js/libs/handlebars.runtime",
		bootstrap: "../assets/js/libs/bootstrap",
		"backbone.layoutmanager": "../assets/js/libs/backbone.layoutmanager",
		jsonpath: "../assets/js/libs/jsonpath"
	},

	shim: {
		"backbone": {
			deps: ["underscore", "jquery"],
			exports: "Backbone"
		},

		"underscore": {
			exports: "_"
		},

		"handlebars": {
			deps: ["bootstrap"],
			exports: "Handlebars"
		},

		"bootstrap": {
			deps: ["jquery"],
			exports: "Bootstrap"
		},

		"backbone.layoutmanager": {
			deps: ["backbone"],
			exports: "Backbone.LayoutManager"
		},

		"jsonpath": {
			deps: [],
			exports: "jsonpath"
		}
	}
});
