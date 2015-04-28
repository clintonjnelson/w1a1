'use strict';

var expect = require('chai').expect;
var Greet = require('../greet3');

describe('Greet', function(){
  var greet;     // declare here so that it's scoped here.

  before( function(){
    greet = new Greet();
  });

  it('should be able to greet someone by name', function(){
    expect(greet.greet('zaphod')).to.eql('hello zaphod');
  });
});


