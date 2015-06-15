'use strict';

module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt);

  // Project configuration.
  grunt.initConfig({
    nodeunit: {
      preprocess : {
        src: ['test/preprocess_test.js']
      }
    },
    jshint: {
      options: {
        jshintrc : '.jshintrc'
      },
      lib : ['lib/**/*.js']
    },
    watch: {
      src: {
        options: {
          interrupt: false
        },
        files: [
          "lib/**/*.js",
          "test/**/*",
          "!test/tmp/**/*"
        ],
        tasks: ["test"]
      }
    }
  });

  // Default task.
  grunt.registerTask('test', ['jshint', 'nodeunit']);
  grunt.registerTask('dev', ['test', 'watch']);
  grunt.registerTask('default', ['test']);

};
