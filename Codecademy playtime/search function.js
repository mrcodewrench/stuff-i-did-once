/*jshint multistr:true */
var text = "as a regular guy named mike i have the best best girl ever and she loves me cause my name is mike and she loves the name mike."




var Locations = [];
var Find = "best"; // enter text to search for
var Position = 0
var LastPosition = 0;

do{
    Position = text.search(Find);
    if (Position != -1){
    Locations.push(Position + LastPosition);
    LastPosition = LastPosition + Position;
    text = text.substr(Position + 1);
    }
} while (Position != -1);


if (Locations.length === 0) {
    console.log("Text not found!!");
} else {
    console.log(Locations.length + " " + Find + "'s found at the following positions:");
    console.log(Locations);
}
