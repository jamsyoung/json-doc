'use strict';

/*
 * This file is required by the mocha-test grunt task.  This should contain
 * things that need to be done for every test file
 */


// should must be defined globally to make the linter happy
global.should = require('chai').should();


// needed for blanket instrumentation with mocha
require('blanket')({
    'data-cover-only': ['cli-wrapper.js', 'consolidator.js'],
    'data-cover-never': ['node_modules', 'test']
});
