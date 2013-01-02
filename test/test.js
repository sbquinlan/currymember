var should = require('should'),
    mocha = require('mocha');
    
// under test
require('../curry.js');

describe('curry', function () {
  it('adds a method to Function', function() {
    var noop = function () {};
    should.exist(noop.curry);
  });
  
  it('curries functions', function() {
    var add = function (a, b) { 
      return a+b; 
    };
    var add_one = add.curry(1);
    add_one(1).should.equal(2);
    add_one(2).should.equal(3);
  });
  
  it('takes variable arguments', function() {
    var noop = function () {};
    noop.curry.should.not.throw();
    noop.curry.should.not.throw(1);
    noop.curry.should.not.throw(2, 3);
  });
});