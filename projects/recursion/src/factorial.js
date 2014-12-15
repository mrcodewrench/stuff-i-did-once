var factorialIter = function(n) {
	var value = 1;
	for (var i = 1; i <= n; i++){
		value = i * value;
	}
	return value;
}



var factorialRecur = function(n) {
	if (n === 0){
		return 1;
	} else {
		return n * factorialRecur(n-1);
	}
}



var factorialTail = function(n) {
	if(n == 0)
		return 1;
	else
		return factorialTailHelper(n-1, n);
}

var factorialTailHelper = function(n, accum) {
	if(n==0)
		return accum;
	else
		return factorialTailHelper(n-1, n * accum);
}