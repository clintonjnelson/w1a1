'use strict';

// This sets module.exports equal to exports equal to the function & saving to the variable
// This sets universal thing for exporting
// This enables us to modify the Greet object for auto exporting below. ie: a named thing.
// Another common approach is to set it all equal to {};

// Can also write this way
//// var Greet = function(){};
//// module.exports = exports = Greet;

var Greet = module.exports = exports = function(){

};

// Better memory management here than in the constructor
Greet.prototype.greet = function(name) {
  return "hello " + name;
};
