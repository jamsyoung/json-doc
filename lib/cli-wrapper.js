'use strict';

/*
 * This is a wrapper around a library that will take in two JSON files and
 * return back a merged artifact of the two.
 */

var argv,
    schema,
    source,
    metadata = require('../package.json'),
    optimist = require('optimist'),
    consolidator = require('./process.js');

argv = optimist
    .usage('Usage:\n  json-doc source schema\n  json-doc [-h|--help]\n  json-doc [-v|--version]')
    .alias('help', 'h')
    .alias('version', 'v')
    .describe('help', 'You are looking at it.')
    .describe('version', 'Show the current version installed of dust-compiler')
    .argv;

if (argv.v) {
    console.log('json-doc v' + metadata.version);
    process.exit();
}

if (argv.h || typeof argv._[1] === 'undefined') {
    optimist.showHelp(function () {
        optimist.showHelp();
        console.log('  source         The source JSON file');
        console.log('  schema         The JSON schema documentation file');
    });
    process.exit();
}

source = argv._[0];
schema = argv._[1];

console.log('Generating documentation...');

console.log(consolidator.generate(source, schema));
