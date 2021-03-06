# sparse-splice

[![NPM Version][npm-image]](https://npmjs.org/package/sparse-splice)
[![Build Status][travis-image]](https://travis-ci.org/keis/sparse-splice)
[![Coverage Status][coveralls-image]](https://coveralls.io/r/keis/sparse-splice?branch=master)

Like `Array.splice` but instead of removing a consecutive range of elements this module allows for the elements to be scattered all over the array.

## Installation

```bash
npm install --save sparse-splice
```

## Usage

```javascript
var cats = [ 'Dusty'
           , 'Casper'
           , 'Samantha'
           , 'Maggie'
           , 'Chester'
           , 'Sadie'
           , 'Coco'
           , 'Lola'
           ]

// Remove Sadie, Coco and Maggie
require('sparse-splice')(cats, [5, 6, 3])

// cats = ['Dusty', 'Casper', 'Samantha', 'Chester', 'Lola']
```

[npm-image]: https://img.shields.io/npm/v/sparse-splice.svg?style=flat
[travis-image]: https://img.shields.io/travis/keis/sparse-splice.svg?style=flat
[coveralls-image]: https://img.shields.io/coveralls/keis/sparse-splice.svg?style=flat
