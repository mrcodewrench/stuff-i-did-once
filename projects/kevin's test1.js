//countBs takes string bbc returns number of 
var countCharMaker = function (sym){
    var countChar = function (text){
        var  symCount = 0;
        for (var i = 0; i < text.length; i++){
            if (text[i] == sym){
                symCount++;
            }
        }
        return symCount;
    }
    return countChar;
}





var str = "bbcbhtydhbBB";
var  countChar = function(text, letter){
    return countCharMaker(letter)(text);
}
console.log(countChar(str, "b"));

var countBs = countCharMaker("B");
console.log(countBs(str));


// function ret0() {return 0;}
// function ret1() {return 1;}
// function ret2() {return 2;}

// console.log(ret0() || ret1());
// console.log(ret1() || ret0());
// console.log(ret1() || ret2());

// console.log(ret0() && ret1());
// console.log(ret1() && ret0());
// console.log(ret1() && ret2());