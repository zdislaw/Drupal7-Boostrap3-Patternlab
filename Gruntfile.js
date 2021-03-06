module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        sourceMap : true
      },
      beaconfire : {
        files : {
          "httpdocs/sites/all/themes/beaconfire_bootstrap/beaconfire_bootstrap.min.js" : 
          [
            "httpdocs/sites/all/themes/beaconfire_bootstrap/js/beaconfire_bootstrap.core.js",
            "httpdocs/sites/all/themes/beaconfire_bootstrap/js/parts/**/*.js"
          ]
        }
      },
      primary: {
        files : {
          "httpdocs/sites/default/themes/primary_bootstrap/primary_bootstrap.min.js" : 
          [
            "httpdocs/sites/default/themes/primary_bootstrap/js/primary_bootstrap.core.js",
            "httpdocs/sites/default/themes/primary_bootstrap/js/parts/**/*.js"
          ]
        }
      }
    },

    sass_globbing: {
      primary: {
        files: {//grab all the components partials and write them into a single file
          'httpdocs/sites/default/themes/primary_bootstrap/sass/partials/_components.scss': 
          'httpdocs/sites/default/themes/primary_bootstrap/sass/partials/components/*.scss'
        },
        options: {
          useSingleQuotes: false,
          signature: '// This file was compiled automatically, do not edit!! Discrete, reusable UI components. (SMACSS "modules") Build sub-folders and partials in the *components* folder. Sass globbing will automatically import partials in the *components* directory, but NOT in sub-directories to ensure load order. Sub-directories will need to be manually imported from a partial in the *components* directory. See _nav.scss for an example.'
        }
      }
    },

    sass : {
      options : {
       sourceMap : true,
       outputStyle : 'expanded'
      },
      beaconfire : {
        files : {
         "httpdocs/sites/all/themes/beaconfire_bootstrap/css/beaconfire_bootstrap.css" : 
         "httpdocs/sites/all/themes/beaconfire_bootstrap/sass/beaconfire_bootstrap.scss"
        }
      },
      primary : {
        files : {
         "httpdocs/sites/default/themes/primary_bootstrap/css/styles.css" : 
         "httpdocs/sites/default/themes/primary_bootstrap/sass/styles.scss"
        }
      },
      patternlab : {
        files : {
         "httpdocs/sites/default/themes/primary_bootstrap/patternlab/source/css/style.css" : 
         "httpdocs/sites/default/themes/primary_bootstrap/patternlab/source/css/style.scss"
        }
      }
    },

    postcss: {
      options: {
        map: {
          inline: false, // save all sourcemaps as separate files...
          annotation: 'css/' // ...to the specified directory
        },
        processors: [
          //require('pixrem')(), // add fallbacks for rem units
          require('autoprefixer-core')({browsers: 'last 3 versions'}), // add vendor prefixes
          //require('cssnano')() // minify the result
        ]
      },
      beaconfire: {
        src: 'httpdocs/sites/all/themes/beaconfire_bootstrap/css/*.css'
      },
      primary: {
        src: 'httpdocs/sites/default/themes/primary_bootstrap/css/*.css'
      }
    },

    bowercopy: {
      bootstrap: {
        options: {
          runBower: true,
          report: true,
          clean: true,
        },
        files: {
          'httpdocs/sites/all/themes/beaconfire_bootstrap/bootstrap_sass': 'bootstrap-sass/assets/stylesheets/*.scss',
          'httpdocs/sites/all/themes/beaconfire_bootstrap/bootstrap_sass/bootstrap': 'bootstrap-sass/assets/stylesheets/bootstrap/*.scss',
          'httpdocs/sites/all/themes/beaconfire_bootstrap/bootstrap_sass/bootstrap/mixins': 'bootstrap-sass/assets/stylesheets/bootstrap/mixins/*.scss'
        }
      }
    },

    watch: {
      beaconfire: {
        options: {
          reload: false,
          spawn: false,
          interrupt: false,
          livereload: true
        },                  
        files: [
          'httpdocs/sites/all/themes/beaconfire_bootstrap/sass/**/*.scss'
        ],
        tasks: ['uglify:beaconfire','sass:beaconfire','postcss:beaconfire']
      },
      primary: {
        options: {
          reload: false,
          spawn: false,
          interrupt: false,
          livereload: true
        },     
        files: [
          'httpdocs/sites/default/themes/primary_bootstrap/sass/**/*.scss',
          'httpdocs/sites/default/themes/primary_bootstrap/js/parts/**/*.js'
        ],
        tasks: ['uglify:primary','sass_globbing:primary','sass:primary','postcss:primary']
      },
      patternlab: {
        options: {
          reload: false,
          spawn: false,
          interrupt: false,
          livereload: true
        },  
        files: [
          'httpdocs/sites/default/themes/primary_bootstrap/patternlab/source/css/**/*.scss'
        ],
        tasks: ['sass:patternlab']
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bowercopy');
  grunt.loadNpmTasks('grunt-sass-globbing');

  // Default task(s).
  grunt.registerTask('default', ['uglify','sass_globbing','sass']);
  grunt.registerTask('dev', ['uglify:primary','sass_globbing:primary','sass:primary','sass:patternlab']);
  grunt.registerTask('prod', ['uglify','sass_globbing','sass','postcss']);

};
