/* global describe, it */
'use strict';

var consolidator = require('../../lib/consolidator.js');

// should must be defined globally to make the linter happy
global.should = require('chai').should();


describe('Consolidator', function () {

    it('should generate two sources into one', function () {
        consolidator.generate('one', 'two').should.equal('onetwo');
    });
});
