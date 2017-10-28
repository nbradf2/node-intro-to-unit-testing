const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer');

// check to make sure num is number
// if divisible by 15, expect 'fizz-buzz'
// if divisible by 5, expect 'buzz'
// if divisible by 3, expect 'fizz'

describe('fizzBuzzer', function() {
  it('should determine if a number is divisible by 15', function() {
    [15, 30, 45, 60].forEach(function(input) {
      fizzBuzzer(input).should.equal('fizz-buzz');
    });
  });
  it('should determine if a number is divisible by 5', function() {
    [5, 10, 20,].forEach(function(input) {
      fizzBuzzer(input).should.equal('buzz');
    });
  });
  it('should determine if a number is divisible by 3', function() {
    [3, 6, 9, 12].forEach(function(input) {
      fizzBuzzer(input).should.equal('fizz');
    });
  });
  it('should return number if it is not divisible by 3, 5, or 15', function() {
    [1, 2, 4, 14].forEach(function(input) {
      fizzBuzzer(input).should.equal(input); 
    });
  });
  it('should return error if input is not a number', function() {
    const badInputs = [
      false,
      true,
      'Ramona'
    ];
      badInputs.forEach(function(input) {
        (function() {
          fizzBuzzer(input[0])
        }).should.throw(Error);
      });
    });
});

