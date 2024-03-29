'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
	coffee: {
		lib: {
			expand: true,
			flatten: true,
			cwd: 'lib',
			src: ['*.coffee'],
			dest: 'lib',
			ext: '.js'
		},
        test: {
            expand: true,
            flatten: true,
            cwd: 'test',
            src: ['*.coffee'],
            dest: 'test',
            ext: '.js'
        }    
	},
    nodeunit: {
      files: ['test/**/*_test.js'],
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib: {
        src: ['lib/**/*.js']
      },
      test: {
        src: ['test/**/*.js']
      },
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib: {
        files: '<%= jshint.lib.src %>',
        tasks: ['jshint:lib', 'nodeunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'nodeunit']
      }
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['coffee', 'nodeunit']);

};
