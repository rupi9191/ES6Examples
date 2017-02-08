'use strict';

module.exports = function(grunt) {
    // autoload grunt task dependencies
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // grunt task configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // file options
        files: {
            // js
            entry: 'js/app.js',
            appSrc: 'dist/js/built/app.js',
            vendorSrc: 'dist/js/built/vendor.js',
            jquery: 'jquery',
            bootstrap: 'bootstrap'
        },

           // module bundling by using browserify with ract and es6 transform
        browserify: {
            // bundling vendor lib source file
            vendor: {
                src: ['./node_modules'],
                dest: '<%= files.vendorSrc %>',
                options: {
                    alias: [
                        '<%= files.jquery %>:',
                    ]
                },
                external: null
            },

            // bundling for development
            dev: {
                files: { '<%= files.appSrc %>': ['<%= files.entry %>'] },
                options: {
                    watch: true,
                    keepLive: true,
                    transform: [
                        ['babelify']
                    ],
                    external: [
                      '<%= files.jquery %>',
                    ]
                }
            },
			

        },
		connect: {
			server: {
				options: {
					protocol: 'http',
					port: 8000,
					hostname: '0.0.0.0',
					base: '.',
					keepalive: true,
					open: true
				}
			}
		},
		  // watch respective specific tasks
		watch: {
			js: {
				files: ['*.js'],
				tasks: ['browserify:dev']
			}
		}


    });

    // register the respective tasks for `development` context
    grunt.registerTask('dev', [
        'browserify:vendor',
        'browserify:dev',
		'connect',
		'watch'
    ]);

    // register the `default` to map `production` context
    grunt.registerTask('default', 'build ', function() {
        grunt.task.run('dev');
    });
};
