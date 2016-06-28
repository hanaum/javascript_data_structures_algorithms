function Stack() {
	var items = [];
	this.pop = function() {
		return items.pop();
	}
	this.push = function(value) {
		items.push(value);
	}
	this.length = function() {
		return items.length;
	}
}

// take in a string.
function isBalancedParens(str) {
	var stack = new Stack();
	if (str.length % 2 !== 0) {
		return false;
	}

	for (var i = 0; i < str.length; i++) {
		var currentCharacter = str[i];
		if (isLeftParen(currentCharacter)) {
			stack.push(currentCharacter);
		} else if (isRightParen(currentCharacter)) {
			if (stack.length === 0 ||
					!isMatchingParen(currentCharacter, stack.pop())) {
				return false;
			}
		}
	}

	return true;
}

function isLeftParen(paren) {
	return paren === '{' || paren === '[' || paren === '(';
}

function isRightParen(paren) {
	return paren === '}' || paren === ']' || paren === ')';
}

function isMatchingParen(right, left) {
	switch (right) {
		case '}':
			return left === '{';
		case ']':
			return left === '[';
		case ')':
			return left === '(';
		default:
			return false;
	}
}

console.log(isBalancedParens(']'));
console.log(isBalancedParens('[]]'));
console.log(isBalancedParens('{}]'));
console.log(isBalancedParens('{'));
console.log(isBalancedParens('[{]}'));
console.log(isBalancedParens(''));
console.log(isBalancedParens('[]{}'));

