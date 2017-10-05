var userResponse = prompt('Are we there yet?');

while (!userResponse.toUpperCase().includes("YEAH") && !userResponse.toUpperCase().includes("YES")) {
	userResponse = prompt('Are we there yet?');
}

	alert('Yay! We finally made it!');
