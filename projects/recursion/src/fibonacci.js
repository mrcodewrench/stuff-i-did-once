var fibIter = function(n){
	if (n === 1 || n === 2) {
		return 1;
	} else {
		var value = 1;
		var oldValue = 1;
		for(var i = 3; i <= n; i++) {
			var temp = value;
			value += oldValue;
			oldValue = temp;
		}
		return value;
	}
}

var fibRecur = function(n){
	if (n === 1 || n=== 2) {
		return 1;
	} else {
		return fibRecur(n-1) + fibRecur(n-2);
	}
}

var fibTail = function(n){
	if (n === 1 || n === 2){
		return 1;
	} else {
		return fibTailHelper(n, 1, 1);
	}
}

var  fibTailHelper = function(n, accum1, accum2){
	if (n === 2){
		return accum2;
	} else {
		return fibTailHelper(n-1, accum2, accum1 + accum2);
	}
}
