/* global describe, it */
'use strict';

var fs = require('fs'),
    path = require('path'),
    childProcess = require('child_process'),
    jsonDocPath = path.join(path.dirname(fs.realpathSync(__filename)), '../../json-doc-cli.js');


describe('Command Line Wrapper', function () {
    it('should return the current version when called with -v', function (done) {
        childProcess.exec(jsonDocPath + ' -v', function (error, stdout) {
            if (error) { console.dir(error); }

            stdout.should.equal('json-doc v0.1.0\n');
            done();
        });
    });

    it('should return help information when called with -h', function (done) {
        childProcess.exec(jsonDocPath + ' -h', function (error, stdout) {
            if (error) { console.dir(error); }

            stdout.should.equal('  source         The source JSON file\n  schema         The JSON schema documentation file\n');
            done();
        });
    });

    it('should return help information when called with no arguments', function (done) {
        childProcess.exec(jsonDocPath, function (error, stdout) {
            if (error) { console.dir(error); }

            stdout.should.equal('  source         The source JSON file\n  schema         The JSON schema documentation file\n');
            done();
        });
    });

    it('should return help information when called with only `source` or `schema`', function (done) {
        childProcess.exec(jsonDocPath + ' source', function (error, stdout) {
            if (error) { console.dir(error); }

            stdout.should.equal('  source         The source JSON file\n  schema         The JSON schema documentation file\n');
            done();
        });
    });

    it('should generate documentation when `source` and `schema` are passed in', function (done) {
        childProcess.exec(jsonDocPath + ' one two', function (error, stdout) {
            if (error) { console.dir(error); }

            stdout.should.contain('Generating documentation');
            done();
        });
    });
});
