module.exports = function(grunt) {

  // Tasks we wnat Grunt to load from NPM
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');

  // Define the tasks we have loaded into Grunt from NPM
  grunt.initConfig({
    // WHY DOES EVERYTHING GO INTO JSHINT? IS THAT A STANDARD PRACTICE?
    // HOW DOES THIS RUN MOCHA? THE GLOBAL OPTIONS ARE ALL FROM MOCHA...
    // AAAAH, I SEE. THIS IS SO THAT JSHINT WON'T THROW ERRORS WHEN IT SEES THESE FROM MOCHA.
    jshint: {
      dev: {
        src: ['Gruntfile.js', 'test/**/*.js', 'greet*.js']   //why use src instead of "all". Docs indicate use "all"
      },
      options: {
        node: true,
        globals: {
          after: true,
          afterEach: true,
          before: true,
          beforeEach: true,
          describe: true,
          it: true
        }
      }
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
    }
  });

  // register the 'test' task to run jshint:dev
  grunt.registerTask('test', ['jshint:dev', 'mochaTest']); // run the jshint task - dev portion

  // Default task to run with CL "grunt"
  grunt.registerTask('default', ['test']);
};
