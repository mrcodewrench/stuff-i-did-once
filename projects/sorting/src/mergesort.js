var mergeSort = function (arr) {
    var arrLeft;
    var arrRight;
    
    if (arr.length === 1) {
        return arr;
    }else {
        arrLeft =  arr.slice(0,Math.floor(arr.length/2));
        arrRight = arr.slice(Math.floor(arr.length/2));
        return sortHelper(mergeSort(arrLeft), mergeSort(arrRight));
        
    }
    
}
var sortHelper = function (arr1, arr2){
    var newArray = [];
    var index1 = 0;
    var index2 = 0;
    
    for (var i = 0; i < (arr1.length + arr2.length); i++) {
        if(index1 < arr1.length && index2 < arr2.length){
            if(arr1[index1] <= arr2[index2]){
                newArray[i] = arr1[index1];
                index1++;
            } else {
                newArray[i] = arr2[index2];
                index2++;
            }
        } else if (index1 >= arr1.length && index2 < arr2.length) {
            newArray[i] = arr2[index2];
            index2++;
        } else if (index2 >= arr2.length && index1 < arr1.length) {
            newArray[i] = arr1[index1];
            index1++;
        }
    }
    return newArray;
}



var oddArray = [5,2,3,6,9,8,4,7,1];
var evenArray = [5,2,3,6,9,8,4,7];

console.log("odd: " + mergeSort(oddArray));
console.log("even: " + mergeSort(evenArray));