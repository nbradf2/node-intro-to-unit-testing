const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer');

// check to make sure num is number
// if divisible by 15, expect 'fizz-buzz'
// if divisible by 5, expect 'buzz'
// if divisible by 3, expect 'fizz'

// Unit tests for 'fizzBuzzer' function
describe('fizzBuzzer', function() {
	//test the normal case
	it('should determine if a number is divisible by 3, 5, or both', function() {
		// range of normal inputs, inluding
		// notable cases like negative answers
		const normalCases = [
			{num: -1, expected: -1}
			{num: 1, expected: 1},
			{num: 3, expected: 'fizz'},
			{num: 5, expected: 'buzz'},
			{num: 8, expected: 8},
			{num: 15, expected: 'fizz-buzz'}
		];
		// for each input, 'fizzBuzzer' should produce
		// the expected value
		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input.num);
			answer.should.equal(input.expected);
		});
	});

	it('should raise error if args are not numbers', function() {
		// range of bad inputs where it is not a number
		const badInputs = [
			'one',
			'three',
			'five',
			'eight',
			'fifteen'
		];
	});
});

