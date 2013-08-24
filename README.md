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


## Grunt Tasks
- `grunt test` - Runs all of the completed grunt test tasks.

- `grunt lint` - Runs a jshint task.

- `grunt coverage` - Runs a code coverage task.  NOTE: There is currently zero
  coverage since there are no unit tests.

- `grunt complexity` - Runs a complexity task.

- `grunt clean` - Deletes build generated failes.


## References
- <http://package.json.nodejitsu.com>

- <http://json-schema.org>

- <http://jsonschema.net>
