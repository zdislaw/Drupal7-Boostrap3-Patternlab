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
         "httpdocs/sites/default/themes/primary_bootstrap/patternlab/source/css/styles.css" : 
         "httpdocs/sites/default/themes/primary_bootstrap/patternlab/source/css/scss/styles.scss"
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

    watch: {
      scripts: {
        files: [
          'httpdocs/sites/all/themes/beaconfire_bootstrap/sass/**/*.scss',
          'httpdocs/sites/default/themes/primary_bootstrap/sass/**/*.scss',
          'httpdocs/sites/default/themes/primary_bootstrap/patternlab/source/css/scss/**/*.scss',
          'httpdocs/sites/default/themes/primary_bootstrap/js/parts/**/*.js'
        ],
        tasks: ['uglify','sass','postcss'],
        options: {
          spawn: false,
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify','sass','postcss']);

};
