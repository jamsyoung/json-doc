/* global describe, it */
'use strict';

var consolidator = require('../../lib/process.js');


describe('Process', function () {
    describe('process.generate', function () {
        it('should generate two sources into one', function () {
            consolidator.generate('one', 'two').should.equal('onetwo');
        });
    });
});
