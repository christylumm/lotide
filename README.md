# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @christylumm/lotide`

**Require it:**

`const _ = require('@christylumm/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertarraysEqual(actual, expected)`: Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
* `assertEqual(actual, expected)`: Make the function compare the two values it takes in and print out a message telling us if they match or not
* `function3(...)`: description