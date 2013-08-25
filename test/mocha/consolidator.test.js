/* global describe, it */
'use strict';

var consolidator = require('../../lib/consolidator.js');


describe('Consolidator', function () {
    it('should generate two sources into one', function () {
        consolidator.generate('one', 'two').should.equal('onetwo');
    });
});
