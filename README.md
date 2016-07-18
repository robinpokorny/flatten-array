# flatten-array

**flatten-array** is a simple nested array flattener.

[![license](https://img.shields.io/npm/l/flatten-array.svg?style=flat-square)](https://github.com/robinpokorny/flatten-array/blob/master/LICENCE)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-lightgrey.svg?style=flat-square)](http://standardjs.com/)

## Install

```sh
npm install --save robinpokorny/flatten-array
```

## Usage

```js
import flatMap from 'flatten-array'

flatMap([[1, 2, [3]], 4]) // [1, 2, 3, 4]
```

## [API](docs/api.md)

## Dev Tasks

* `npm run compile` - compile ES2015 source
* `npm test` - compile then run format check and unit tests
* `npm run docs` - generates API documentation

## Notes

* A polyfill for
[Array.isArray] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
might be needed to support older browsers.
