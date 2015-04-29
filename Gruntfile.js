module.exports = function(grunt) {

  // Tasks we wnat Grunt to load from NPM
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');

  // Define the tasks we have loaded into Grunt from NPM
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      dev: {
        src: ['Gruntfile.js', 'test/**/*.js', 'greet*.js']  //why use src instead of "all". Docs indicate use "all"
      },
      // Why Mocha Globals? So Jshint won't throw errors when it sees Mocha globals
      options: require('./lib/jshintrc.js')
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',         // reporter is the output
          captureFile: false,       // specify file to output to
          quiet: false,             // optionally supress output to console
          clearRequireCache: false  // clear require cache before tests
        },
        src: ['test/**/*.js']  // test locations
      }
    },
    watch: {
      scripts: {
        files: ['**/*.js'],
        tasks: ['default'],
        options: {
          // event: ['all'] // bu default, this is set to "all change, delete, add are triggers"
        }
      }
    }
  });

  // register the 'test' task to run jshint:dev
  grunt.registerTask('test', ['jshint:dev', 'mochaTest']); // run the jshint task - dev portion
  // If want to code while being watched
  grunt.registerTask('watchtest', ['test', 'watch']);
  // Default task to run with CL "grunt"
  grunt.registerTask('default', ['test']);
};
