var mergeSort = function (arr) {
    if(arr.length == 1)
        return arr;
    else
    {
        // break it on down
        var left = arr.slice(0, Math.floor(arr.length / 2));
        var right = arr.slice(Math.floor(arr.length / 2));

        // get freaky with it
        left = mergeSort(left);
        right = mergeSort(right);

        // get stacked (back together)
        return lowLevelMerge(left, right);
    }
}

var lowLevelMerge = function (left, right)
{
    var datNewShit = [];
    var i = 0;
    var j = 0;
    while(i < left.length && j < right.length) {
        if(left[i] <= right[j])
            datNewShit.push(left[i++]);
        else
            datNewShit.push(right[j++]);
    }

    if(i < left.length)
        return datNewShit.concat(left.splice(i));
    else
        return datNewShit.concat(right.splice(j));
}



var inPlace = function(arr) {
    return inPlaceHelper(arr, 0, Math.floor(arr.length / 2));
}

var inPlaceHelper = function(arr, i, j) {
if(arr.length == 1)
        return arr;
    else
    {
        // break it on down
        var left = arr.slice(0, Math.floor(arr.length / 2));
        var right = arr.slice(Math.floor(arr.length / 2));

        // get freaky with it
        left = mergeSort(left);
        right = mergeSort(right);

        // get stacked (back together)
        return lowLevelMerge(left, right);
    }
}

var lowLevelMergeInPlace = function (left, right)
{
    var datNewShit = [];
    var i = 0;
    var j = 0;
    while(i < left.length && j < right.length) {
        if(left[i] < right[j])
            datNewShit.push(left[i++]);
        else if(left[i] > right[j])
            datNewShit.push(right[j++]);
    }

    if(i < left.length)
        return datNewShit.concat(left.splice(i));
    else
        return datNewShit.concat(right.splice(j));
}





var oddArray = [5,2,3,6,9,8,4,7,1];
var evenArray = [5,2,3,6,9,8,4,7];

console.log("odd: " + inPlace(oddArray));
console.log("even: " + inPlace(evenArray));