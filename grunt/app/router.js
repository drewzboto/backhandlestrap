define([
	// Application.
	"app",

	// Modules.
	"modules/navigation",	
	"modules/home",
	"modules/community",
	"modules/docs",
	"modules/support",
	"modules/authentication",
	"modules/cart"	
],

function(app, Navigation, Home, Community, Docs, Support, Authentication, Cart) {

	// Defining the application router, you can attach sub routers here.
	var Router = Backbone.Router.extend({
		routes: {
			"": "index",
			"community": "community",
			"docs": "docs",
			"support": "support",
			"shop": "shop",
			"cart": "cart",
			"account": "account"
		},

		index: function() {
			console.log("index");
			app.layout.setView("#maincontent", new Home.Views.Index());
			app.layout.setView("#navcontent", new Navigation.Views.Index({
				model: this.navigation,
				views: {
					"#cart": new Cart.Views.Index({
						model: this.cart
					}),					
					"#authentication": new Authentication.Views.Index({
						model: this.auth
					})
				}
			}));

			app.useLayout("main").render();
			this.navigation.set("active", "index");            
		},

		community: function() {
			app.useLayout("main");		
			app.layout.setView("#maincontent", new Community.Views.Index()).render();			
			this.navigation.set({active: "community"});
		},

		docs: function() {
			app.useLayout("main");		
			app.layout.setView("#maincontent", new Docs.Views.Index()).render();
			this.navigation.set("active", "docs");      
		},

		support: function() {
			app.useLayout("main");			
			app.layout.setView("#maincontent", new Support.Views.Index()).render();
			this.navigation.set("active", "support");        
		},

		shop: function() {
			app.useLayout("main");			
			this.navigation.set("active", "shop");            
		},		

		cart: function() {
			app.useLayout("main");			
			this.navigation.set("active", "cart");            
		},				

		account: function() {
			app.useLayout("main");			
			this.navigation.set("active", "account");            
		},				

		initialize: function() {
			// setup the models
			this.navigation = new Navigation.Model();
			this.auth = new Authentication.Model();
			this.cart = new Cart.Model();

			// use main layout and set views
			app.useLayout("main");
		}
	});

	return Router;

});
