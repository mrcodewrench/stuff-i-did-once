function addM (m) {
	return function (x) {
		return function (y) {
			return x + m + y;
		}
	}
}


console.log(addM(4)(3)(2));