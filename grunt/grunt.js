//  My current grunt.js file, includes examples for compiling less,
//  handlebars templates, file watching, etc
//  
//  My most used task is the "launch" task for linting/testing
//  my files as I work, has been amazingly helpful
// 
//  Comments below are the boilerplate comments from the original gruntfile
//  I modified via @tbranyen's boilerplate-handlebars-layoutmanager project
//
//  NOTE: for this to work you need to install the below npm tasks
// via npm install

module.exports = function(grunt) {

	// This is the main application configuration file.  It is a Grunt
	// configuration file, which you can learn more about here:
	// https://github.com/cowboy/grunt/blob/master/docs/configuring.md
	//
	grunt.initConfig({
		pkg: '<json:package.json>',

		meta: {
			banner: '/*! <%=pkg.name%> - v<%=pkg.version%> (build <%=pkg.build%>) - '+
			'<%=grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT")%> */',
		},

		// The clean task ensures all files are removed from the www/ directory so
		// that no files linger from previous builds.
		clean: {
			compile: ["www"]
		},

		// The lint task will run the build configuration and the application
		// JavaScript through JSHint and report any errors.  You can change the
		// options for this task, by reading this:
		// https://github.com/cowboy/grunt/blob/master/docs/task_lint.md
		lint: {
			files: [
			"app/**/*.js"
			]
		},

		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true, 
				noarg: true,
				sub: true,
				boss: true,
				eqnull: true,
				browser: true,
				scripturl: true
			},
			globals: {
				jQuery: true
			}
		},

		handlebars: {
			compile: {
				options: {
					namespace: "JST"
				},        
				files: {
					"www/compile/templates.js":"app/templates/**/*.handlebars",
				}
			}
		},

		// The concatenate task is used here to merge the almond require/define shim
		// and the templates into the application code. 
		concat: {
			"www/js/app.js": [
			"<banner:meta.banner>",
			"assets/js/libs/almond.js",
					"assets/js/libs/modernizr.js", // should fix with a requires later on
					"www/compile/require.js",
					"www/compile/templates.js"
					]
				},

		// This task uses the MinCSS Node.js project to take all your CSS files in
		// order and concatenate them into a single CSS file named index.css.  It
		// also minifies all the CSS as well.  This is named index.css, because we
		// only want to load one stylesheet in index.html.
		mincss: {
			compress: {
				files: {
					"www/release/css/index.css": ["www/css/index.css"]
				} 
			}
		},

		// Takes the built require.js file and minifies it for filesize benefits.
		min: {
			"www/release/js/app.js": [
			"www/js/app.js"
			]
		},

		// Running the server without specifying an action will run the defaults,
		// port: 8080 and host: 127.0.0.1.  If you would like to change these
		// defaults, simply add in the properties `port` and `host` respectively.
		server: {
			port: 8080,
			base: "www"
		},

		watch: {
			files: ['<config:lint.files>', 'assets/**/*.less', 'app/**/*.handlebars'],
			tasks: 'lint less qunit handlebars requirejs concat'
		},

		less: {
			compile: {
				options: {
					paths: ["assets/less"]
				},
				files: {
					"www/css/index.css": "assets/less/style.less"
				}
			}
		},

		copy: {
			base: {
				options: {
					basePath: "assets"
				},
				files: {
					"www": ["assets/index.html", "assets/favicon.ico"]
				}
			},
			images: {
				options: {
					basePath: "assets/img"
				},
				files: {
					"www/img": "assets/img/**/*"
				}      
			}
		},

		// This task uses James Burke's excellent r.js AMD build tool.  In the future
		// other builders may be contributed as drop-in alternatives.
		requirejs: {
			compile: {
				options: {
					mainConfigFile: "app/config.js",
					out: "www/compile/require.js",
					// Root application module
					name: "config",
					// Do not wrap everything in an IIFE
					wrap: false,
					// switch to none to keep original lines and code
					optimize: "uglify"
					
				}
			}   
		},

		qunit: {
			all: ["test/qunit/*.html"]
		}

	});

grunt.loadNpmTasks('grunt-contrib');

	// The default task will remove all contents inside the www/ folder, lint all
	// your code, precompile all the underscore templates into
	// www/compile/templates.js, compile all the application code into
	// www/compile/require.js, and then concatenate the require/define shim
	// almond.js and wwww/compile/templates.js into the require.js file.
	grunt.registerTask("default", "clean lint less copy handlebars qunit requirejs concat");

	// Watch and serve
	grunt.registerTask("launch", "server watch");

	// Test
	grunt.registerTask("test", "default qunit");

	// The release task will run the debug tasks and then minify the
	// www/compile/require.js file and CSS files.
	grunt.registerTask("release", "default min mincss");
};