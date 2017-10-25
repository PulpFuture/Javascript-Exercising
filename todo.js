var todo = [];

var command = prompt("What would you like to do?");


while (command.toUpperCase() != 'QUIT') {
	
	if (command.toUpperCase() == 'NEW') {
		todo.push(prompt('Enter a new todo.'));
	} 

	if (command.toUpperCase() == 'LIST') {
		console.log(todo);
	}

	var command = prompt("What would you like to do?");
}

console.log('quitter');