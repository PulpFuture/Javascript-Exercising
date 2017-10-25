function factorial(num) {
	var product = num;
	if (num !== 0) {
		for(i = num; i > 1; i--) {
			 product *= (i-1) ;
		}
		return product;
	}
	else {
		return 1;
	}
}

console.log(factorial(Math.abs(prompt('Enter a positive number:'))));