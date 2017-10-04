var winningNumber = 7;
var userGuess = Number(prompt('Guess a number!'));

if (userGuess > 0) {

	if (userGuess > winningNumber){
		alert('Too high. Refresh and guess again.');
	}
	else if (userGuess < winningNumber) {
		alert('Too low. Refresh and guess again.');
	}
	else {
		alert('You guessed it!!');
	}
}

else {
	alert('Refresh the page and guess again. Positive numbers only.');
}