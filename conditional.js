var userAge = Number(prompt('How old are you?'));


if (userAge > 0){
	if (userAge < 18){
		console.log('Sorry, you are not old enough to enter the venue.');
	}

	else if (userAge < 21){
		console.log('You can enter, but not drink.');
	}

	else{
		
		if (userAge === 21) {
			console.log('Happy 21st loser. Come on in and have a beer');
		}
		else {
			console.log('Come on in. You can drink.');
		}
	}

	if (userAge % 2 > 0) {
		console.log('Your age is odd.');
	}

	if (Number.isInteger(Math.sqrt(userAge))) {
		console.log('Perfect Square.');
	}
}

else {
	console.log('Please refresh and enter a positive number.');
}

