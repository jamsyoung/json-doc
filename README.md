# json-doc
This project is in very early stages of development.  The immediate goal is to
be able to run this script with two arguments; a JSON file to document and a
JSON-schema file that documents it.  The output will be a hmtl file that
documents the JSON file.  This is directly inspired from
<http://package.json.nodejitsu.com>.  

[![Build Status](https://travis-ci.org/jamsyoung/json-doc.png)](https://travis-ci.org/jamsyoung/json-doc)
[![NPM version](https://badge.fury.io/js/json-doc.png)](http://badge.fury.io/js/json-doc)


## Install
This is not a global command line tool, however it does take arguments and
behave like a command line tool right now.  The end goal, however, is to not be
a command line tool.

- Clone this package

- Run `npm install`


## Current Usages

    $ node json-doc.js source schema
    $ node json-doc.js [-h|--help]
    $ ndoe json-doc.js [-v|--version]

or

    $ ./json-doc-cli.js source schema
    $ ./json-doc-cli.js [-h|--help]
    $ ./json-doc-cli.js [-v|--version]


## Grunt Tasks
There are a few grunt tasks available.

- `grunt jshint` - Runs the `jshint` task.

- `grunt mochaTest` - Runs the `mochaTest:test` and `mochaTest:coverage` tasks.

- `grunt complexity` - Runs the `complexity` task.

- `grunt test` - Runs the `jshint`, `mochaTest`, and `complexity` tasks.

- `grunt` - Runs the `default` task, which is the same as `grunt test`.


## References
- <http://package.json.nodejitsu.com>

- <http://json-schema.org>

- <http://jsonschema.net>
