// jshint node: true, esversion: 6
'use strict';

let _ = require('lodash');

let initHexValues = () => {
  let result = {};
  for (let i = 0; i < 6; i++) {
    let key = String.fromCharCode(97 + i);
    let value = 11 + i;
    result[key] = value;
  }
  return result;
};

const HEX = initHexValues();

let isValidInput = (input) => {
  if (!input || input === "") {
    return false;
  }
  const REGEX = /[0-9]*[a-f]*/g;
  return REGEX.test(input);
};

let isHexChar = (char) => {
  return /[a-f]/.test(char);
};

let getMinimalBase = (input) => {
  if (!isValidInput(input)) {
    return "invalid input";
  }
  let base, lastDigit;
  lastDigit = _.chain(input.split(''))
    .sort()
    .last()
    .value();

  if (isHexChar(lastDigit)) {
    base = HEX[lastDigit];
  } else {
    base = parseInt(lastDigit, 10) + 1;
  }
  return `base ${base} => it's ${parseInt(input, base)} in base 10`;
};

// usage: node main.js 101 -> 2
console.log(getMinimalBase(process.argv[2]));
