'use strict';

require('blanket')({
    'data-cover-only': ['cli-wrapper.js', 'consolidator.js'],
    'data-cover-never': ['node_modules', 'test']
});

