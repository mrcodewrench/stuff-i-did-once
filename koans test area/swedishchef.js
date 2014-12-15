// function OurObject() {this.blah = "hey"};
// function OurObject2() {};


var dude = new Object();
console.log(dude.guy);

Object.prototype.guy = "bill";
console.log(dude.guy);

// var thingy = new OurObject2();
// console.log(thingy);

// thingy.kevin = new OurObject();
// console.log(thingy.kevin.blah);

function Muppet(age, hobby) {
  this.age = age;
  this.hobby = hobby;

  this.answerNanny = function(){
    return "Everything's cool!";
  }
}

function SwedishChef(age, hobby, mood) {
  Muppet.call(this, age, hobby);
  this.mood = mood;
  prototype = new Muppet();
  this.cook = function() {
    return "Mmmm soup!";
  }
}
(Object.getPrototypeOf(SwedishChef)).prototype =
SwedishChef.prototype = new Muppet();
console.log(Object.getPrototypeOf(SwedishChef))
console.log(Object);





// console.log(new OurObject());

// var preObj = new OurObject();
// console.log("1st:");
// console.log(Object.getPrototypeOf(preObj)); // OurObject
// console.log(preObj.prototype); // KJL believes it's undef bc preObj is created from another class
// console.log(new OurObject2().prototype); // KJL thinks this is OurObject2
// console.log(preObj.wat);
// console.log(preObj.nonsense);


// preObj.prototype = new OurObject();
// console.log("2nd:");
// console.log(Object.getPrototypeOf(preObj)); // OurObject
// console.log(preObj.prototype); // {} bc it gets from OurObject the empty bag of properties
// console.log(preObj.wat);
// console.log(preObj.nonsense);

// OurObject.prototype.nonsense = "nosense";
// preObj.prototype.wat = "wut";
// console.log("mike says it has wat");
// console.log(new OurObject()); // but it dont

// console.log("3rd:");
// console.log(Object.getPrototypeOf(preObj));
// console.log(preObj.prototype);
// console.log(preObj.wat);
// console.log(preObj.nonsense);

// console.log("Mike's conjecture: ... v should be wut/nosense")
// console.log("Kevin sez: ... v should be undef/nosense")
// console.log(new OurObject().wat);
// console.log(new OurObject().nonsense);
// // console.log(new preObj().wat);
// // console.log(new preObj().nonsense);

// var obj = new OurObject();

// console.log("preObj");
// console.log(Object.getPrototypeOf(preObj));
// console.log(preObj.nonsense);
// console.log("obj");
// console.log(Object.getPrototypeOf(obj));
// console.log(obj.nonsense);

// console.log(Object.getPrototypeOf(preObj) == Object.getPrototypeOf(obj));


/*var preObj = new Object();

Object.prototype.nonsense = "wtfBBQ";

var obj = new Object();

console.log(preObj.nonsense);
console.log(obj.nonsense);
*/









// Object.prototype.nonsense = "wtf!?";
// SwedishChef.prototype = new Muppet();

// var swed = new SwedishChef("asdf","qwerty");
// var mupp = new Muppet("lkjh");

// Object.prototype.nonsense = "wtf!?";

// console.log(mupp.nonsense);

// Muppet.prototype.ageVal = 75;
// Muppet.prototype.ageRef = new NumByRef(75);
// var joe = new Muppet("lk");

// console.log(Object.getPrototypeOf(mupp));
// console.log("val: sc 100?  " + swed.ageVal);
// console.log("val: muppet 75?  " + mupp.ageVal);
// console.log("ref: sc 100?  " + swed.ageRef.val);
// console.log("ref: muppet 75?  " + mupp.ageRef.val);
// console.log(joe.ageVal);
// console.log(joe.ageRef);

// console.log("Muppet.prototype.ageVal: " + Muppet.prototype.ageVal);
// console.log("SwedishChef.prototype.ageVal: " + SwedishChef.prototype.ageVal);
// console.log("Muppet.prototype.ageRef: " + Muppet.prototype.ageRef.val);
// console.log("SwedishChef.prototype.ageRef: " + SwedishChef.prototype.ageRef.val);

// console.log(SwedishChef.answerNanny);
// console.log(SwedishChef.prototype.answerNanny);
// SwedishChef.ageVal= 24;

// var kevin = new SwedishChef(28, "puters" , "happy");
// console.log(kevin.answerNanny());
// console.log(Object.getPrototypeOf(kevin));
