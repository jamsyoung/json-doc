/* global describe, it */
'use strict';

var fs = require('fs'),
    path = require('path'),
    childProcess = require('child_process'),
    jsonDocPath = path.join(path.dirname(fs.realpathSync(__filename)), '../../json-doc-cli.js');


describe('Command Line Wrapper', function () {
    it('-v should return the current version', function (done) {
        childProcess.exec(jsonDocPath + ' -v', function (error, stdout, stderr) {
            stdout.should.equal('json-doc v0.1.0\n');
            done();
        });
    });
});
