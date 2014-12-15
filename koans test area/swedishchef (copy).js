function NumByRef(val)
{ this.val = val; }

function Muppet(hobby) {
  this.ageVal= 100;
  this.ageRef = new NumByRef(100);
  this.hobby = hobby;
  
  
  this.answerNanny = function(){
      return "Everything's cool!";
  }
}

function SwedishChef(hobby, mood) {
  Muppet.call(this, hobby);
  this.mood = mood;
  this.getageVal = function() { return this.ageVal+1; }
  
  this.cook = function() {
    return "Mmmm soup!";
  }
}

// Object.prototype.nonsense = "wtf!?";
SwedishChef.prototype = new Muppet();

var swed = new SwedishChef("asdf","qwerty");
var mupp = new Muppet("lkjh");

Object.prototype.nonsense = "wtf!?";

console.log(mupp.nonsense);

Muppet.prototype.ageVal = 75;
Muppet.prototype.ageRef = new NumByRef(75);
var joe = new Muppet("lk");

console.log(Object.getPrototypeOf(mupp));
console.log("val: sc 100?  " + swed.ageVal);
console.log("val: muppet 75?  " + mupp.ageVal);
console.log("ref: sc 100?  " + swed.ageRef.val);
console.log("ref: muppet 75?  " + mupp.ageRef.val);
console.log(joe.ageVal);
console.log(joe.ageRef);

console.log("Muppet.prototype.ageVal: " + Muppet.prototype.ageVal);
console.log("SwedishChef.prototype.ageVal: " + SwedishChef.prototype.ageVal);
console.log("Muppet.prototype.ageRef: " + Muppet.prototype.ageRef.val);
console.log("SwedishChef.prototype.ageRef: " + SwedishChef.prototype.ageRef.val);

// console.log(SwedishChef.answerNanny);
// console.log(SwedishChef.prototype.answerNanny);
// SwedishChef.ageVal= 24;

// var kevin = new SwedishChef(28, "puters" , "happy");
// console.log(kevin.answerNanny());
// console.log(Object.getPrototypeOf(kevin));
