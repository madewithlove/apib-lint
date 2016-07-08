# apib-lint


[![Build Status](https://travis-ci.org/madewithlove/apib-lint.svg?branch=master)](https://travis-ci.org/madewithlove/apib-lint)

Parses an APIB file and fails on any errors or warnings. 
The purpose of this script is to ensure an APIB is absolutely valid to avoid endpoints being silently ignored by other tools such as Dredd.

## Installation

```shell
$ npm i apib-lint --save-dev
```

## Usage

```shell
$ apib-lint some-file.apib
```

## Testing

```shell
$ npm test
$ npm run lint
```