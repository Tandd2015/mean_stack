var Tigger = {character:"Tigger"};
var Bees = {character:"Bees"};
var Piglet = {character:"Piglet"};
var WinniethePooh = {character:"Winnie the Pooh"};
var Owl = {character:"Owl"};
var ChristoperRobin = {character:"Christoper Robin"};
var Rabbit = {character:"Rabbit"};
var Gopher = {character:"Gopher"};
var Kanga = {character:"Kanga"};
var Eeyore = {character:"Eeyore"};
var Heffalumps = {character:"Heffalumps"};

// WITH CIRCULAR.....
// first row
Tigger.north = WinniethePooh; 
// second row
WinniethePooh.north=ChristoperRobin;
WinniethePooh.south = Tigger;
WinniethePooh.west=Piglet;   
WinniethePooh.east=Bees;

Piglet.north=Owl;  
Piglet.east = WinniethePooh;  

Bees.north=Rabbit;   
Bees.west=WinniethePooh;
// third row
ChristoperRobin.north=Kanga;
ChristoperRobin.south=WinniethePooh;
ChristoperRobin.west=Owl;
ChristoperRobin.east=Rabbit;

Owl.south=Piglet;
Owl.east=ChristoperRobin;

Rabbit.south=Bees;
Rabbit.west=ChristoperRobin;
Rabbit.east=Gopher;

Gopher.west=Rabbit;
// fourth row
Kanga.north=Eeyore;
Kanga.south=ChristoperRobin;
// fifth row
Eeyore.south=Kanga;
Eeyore.east=Heffalumps;

Heffalumps.west=Eeyore;

console.log(Tigger)

// // first row
// Tigger.north= WinniethePooh;
// // second row
// Tigger.north.west= Piglet;
// Tigger.north.east= Bees;
// // third row
// Tigger.north.north= ChristoperRobin;
// Tigger.north.north.west= Rabbit;
// Tigger.north.north.west.west= Gopher;
// Tigger.north.north.east= Owl;
// // fourth row
// Tigger.north.north.north= Kanga;
// // fifth row
// Tigger.north.north.north.north= Eeyore;
// Tigger.north.north.north.north.west= Heffalumps;
// console.log(Tigger);