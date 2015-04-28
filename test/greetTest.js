'use strict';

var expect = require('chai').expect;
var greet = require('../greet.js');

describe("Greet", function() {

  it("returns an object", function() {
    expect(greet).to.be.an("object");
  });
  it("has a method 'greet' in the returned object", function() {
    expect(greet).to.respondTo('greet');
  });
  it('says hello to the provided name string', function() {
    expect(greet.greet("dingo")).to.eq("hello dingo");
  });
  it("can be called from the console", function() {
    process.argv[2] = "dingo";
    expect(greet.greet("dingo")).to.be.calledOnce;
  });
});
