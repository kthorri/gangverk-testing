// Generated by BUCKLESCRIPT VERSION 2.0.0, PLEASE EDIT WITH CARE
'use strict';

var Pervasives = require("bs-platform/lib/js/pervasives.js");

function fizzbuzz(i) {
  var match = i % 3;
  var match$1 = i % 5;
  if (match !== 0) {
    if (match$1 !== 0) {
      return Pervasives.string_of_int(i);
    } else {
      return "Buzz";
    }
  } else if (match$1 !== 0) {
    return "Fizz";
  } else {
    return "FizzBuzz";
  }
}

for(var i = 1; i <= 100; ++i){
  console.log(fizzbuzz(i));
}

exports.fizzbuzz = fizzbuzz;
/*  Not a pure module */