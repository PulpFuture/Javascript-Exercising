function isEven(num) {
	if (num % 2 === 0) {
		return true;
	}
	else {
		return false;
	}
}

var userEntry = prompt('Enter a number:')

console.log(isEven(userEntry));