var counter = 0;

var bubbleSort = function (myArray) {
	var holdVal;
	for(var j = 0; j < myArray.length; j++){
		for (var i = 0; i < myArray.length - j; i++){
			if(myArray[i] > myArray[i+1]){
				holdVal = myArray[i+1];
				myArray[i+1] = myArray[i];
				myArray[i] = holdVal;
			}
			counter++
		}
	} 
}

var kevinArray = [1,2,3];



var testArray = [9,8,7,6,5,4,3,2,1,12,14,22,10,0];
 bubbleSort(testArray);
 console.log(testArray);
 console.log(counter);