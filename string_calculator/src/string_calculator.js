// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {

	var x = string_numbers.indexOf('X');

	return [x, 0];
};
