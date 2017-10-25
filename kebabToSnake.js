function kebabToSnake(str) {
	return str.replace(/-/g, "_");
}

console.log(kebabToSnake(prompt('Enter a kebab-case string:')));