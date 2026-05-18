// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {

	var rows = string_numbers.split('\n');

	for (var y = 0; y < rows.length; y++) {

		var x = rows[y].indexOf('X');

		if (x !== -1) {
			return [x, rows.length - 1 - y];
		}
	}

	return 'Spaceship lost forever.';
};
