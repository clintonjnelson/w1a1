#!/usr/bin/env node
'use strict';

// Original Code from Class by Tyler "toastynerd"
// module.exports = function(name){
//   return 'hello ' + name;
// };

// Another version of the code using the longer-written version
// module.exports = {
//   greet: function(name){
//     return "hello " + name;
//   }
// };


// CLI approach with help from Justin David's blog
// http://justindavis.co/2014/11/16/running-node-modules-from-the-command-line/
// Essentially, we wrap the function in an IFFE and add exports before the function
// Then we need to set the exports method & make the method in one fell swoop
// we'll add module.parent to see if this module was required by another file
//// (if not, then this method was called outside of a file, such as through the CL)

(function(name){
  var sayHello = exports.greet = {
    greet: function(name){
      return "hello " + name;
    }
  };

  if (!module.parent) {
    console.log( sayHello.greet(process.argv[2]) );
  }
})();


