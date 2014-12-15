var sumIter = function(n) {
	var value = 0;

	for ( ; n >= 0 ; n--) {
		value += n;
	}
	return value;
}

var sumRecur = function(n){
	if (n === 0 ){
		return 0;
	}
	return n + sumRecur(n-1);
}

var sumTail = function (n) {
	if (n == 0){
		return 0;
	} else {
		return sumTailHelper(n-1, n);
	}
}

var sumTailHelper = function (n, accum) {
	if (n === 0) {
		return accum;
	}else {
		return sumTailHelper( n-1, n + accum);
	}
}