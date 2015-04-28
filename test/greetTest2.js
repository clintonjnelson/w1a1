'use strict';

var expect = require('chai').expect;
var greet = require('../greet2.js');  // Or call the greet function specifically here

describe('greet2', function(){
  it('should greet someone by name', function(){
    expect(greet.greet('zaphod')).to.eql('hello zaphod');
  });

  it('has a pending test');  // no callback function to run, so pending
});
