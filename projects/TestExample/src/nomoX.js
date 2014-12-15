var makeNoSymbol = function(symbol) {
	return function(uncleanText) {
		var locations = [];
		var position = 0;
		var text = uncleanText
		do{
	    	position = text.search(symbol);
	    	if (position != -1){
	   	 		text = text.substr(0 , position) + text.substr(position + 1);
	    	}
		} while (position != -1);
		return text;
	}
};

var text =  makeNoSymbol("m")("xmen");
console.log(Object.getPrototypeOf(makeNoM) === Function.prototype);
console.log(Function.prototype);