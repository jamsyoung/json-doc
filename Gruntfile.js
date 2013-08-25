'use strict';

var path = require('path');

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-complexity');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.initConfig({
        jshint: {
            files: [
                'Gruntfile.js',
                'json-doc-cli.js',
                'lib/**/*.js',
                'test/**/*.js'
            ],
            options: {
                jshintrc: path.normalize('.jshintrc')
            }
        },
        complexity: {
            build: {
                src: [
                    'Gruntfile.js',
                    'test/**/*.js'
                ],
                options: {
                    errorsOnly: false,
                    cyclomatic: 2,
                    halstead: 5,
                    maintainability: 83
                }
            },
            app: {
                src: ['lib/**/*.js'],
                options: {
                    errorsOnly: false,
                    cyclomatic: 1,
                    halstead: 2,
                    maintainability: 100
                }
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    require: 'test/mocha-setup'
                },
                src: ['test/mocha/*.js']
            },
            coverage: {
                options: {
                    reporter: 'html-cov',
                    quiet: true,
                    captureFile: 'code-coverage.html'
                },
                src: ['test/mocha/*.js']
            }
        }
    });

    grunt.registerTask('test', ['jshint', 'complexity', 'mochaTest']);
    grunt.registerTask('default', ['test']);
};
