'use strict';

require('blanket')({
    'data-cover-only': ['json-doc.js'],
    'data-cover-never': ['node_modules', 'test']
});

