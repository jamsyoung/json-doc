'use strict';

var path = require('path');

module.exports = function (grunt) {
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
                    cyclomatic: 1,
                    halstead: 6,
                    maintainability: 75
                }
            },
            source: {
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
                    require: 'test/coverage-blanket'
                },
                src: ['test/mocha/*.js']
            },
            'test-fun': {
                options: {
                    reporter: 'nyan',
                    require: 'test/coverage-blanket'
                },
                src: ['test/mocha/*.js']
            },
            'html-cov': {
                options: {
                    reporter: 'html-cov',
                    quiet: true,
                    captureFile: 'code-coverage.html'
                },
                src: ['test/mocha/*.js']
            },
            'travis-cov': {
                options: {
                    reporter: 'travis-cov'
                },
                src: ['test/mocha/*.js']
            }
        },
        clean: {
            reports: ['code-coverage.html'],
            dependencies: ['node_modules']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-complexity');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('lint', ['jshint']);
    grunt.registerTask('test', ['lint', 'mochaTest:test', 'mochaTest:html-cov', 'complexity']);
    grunt.registerTask('travis-test', ['lint', 'mochaTest:test', 'mochaTest:travis-cov', 'complexity']);

    grunt.registerTask('clean-reports', ['clean:reports']);
    grunt.registerTask('clean-dependencies', ['clean:dependencies']);

    grunt.registerTask('default', ['test']);
};
