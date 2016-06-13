// iterative fibonacci
function iFibonacci(num) {
	var array = [];
	array[0] = 1;
	array[1] = 1;

	for (var i = 2; i < num; i++) {
		array[i] = array[i - 1] + array[i - 2];
	}
	return array;
}

console.log(iFibonacci(6));