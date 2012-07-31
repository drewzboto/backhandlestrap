define([
	// Libs
	"jquery",
	"underscore",
	"backbone",
	"handlebars",
	"backbone.layoutmanager"
	],

	function($, _, Backbone, Handlebars) {
	// Put application wide code here
	Backbone.LayoutManager.configure({
		paths: {
			layout: "app/templates/layouts/",
			template: "app/templates/"
		},

		render: function(template, context) {
			return template(context);
		},

		fetch: function(path) {
			path = path + ".handlebars";

			var done = this.async();
			var JST = window.JST = window.JST || {}; 

			if (JST[path]) {
				return done(JST[path]);
			} 

			$.get(path, function(contents) {
				var tmpl = Handlebars.compile(contents);
				done(JST[path] = tmpl);
			}, "text");
		}
	});

	// Provide a global location to place configuration settings and module
	// creation.
	var app = {
		// The root path to run the application through.
		//root: "/"
	};

	return _.extend(app, {

		// Create a custom object with a nested Views object
		module: function(additionalProps) {
			return _.extend({ Views: {} }, additionalProps);
		},

		// Helper for specific layouts.
		useLayout: function(name) {
			// If already using this Layout, then don't re-inject into the DOM.
			if (this.layout && this.layout.options.template === name) {
				return this.layout;
			}

			// If a layout already exists, remove it from the DOM.
			if (this.layout) {
				this.layout.remove();
			}

			// Create a new Layout.
			var layout = new Backbone.LayoutManager({
				template: name,
				className: "layout " + name,
				id: "layout"				
			});

			// Attach the Layout to the <body></body>.
			$("body").html(layout.el);

			// Render the layout.
			layout.render();

			// Cache the reference on the Router.
			this.layout = layout;

			// Return the reference, for later usage.
			return layout;		
		},

		getTemplate: function(path) {
			path = "app/templates/" + path + ".handlebars";

			var JST = window.JST = window.JST || {}; 
			if (JST[path]) {
				return JST[path];
			}	
		}

	}, Backbone.Events);
});
