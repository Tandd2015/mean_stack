// 1
// output: undefined 
console.log(hello);
var hello = 'world';
// interpreted vision
var hello;
console.log(hello);
hello = 'world';

// 2
// output: 'magnet'
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}
// interpreted vision
function test(){
	var needle = 'magnet';
	console.log(needle);
}
var needle = 'haystack';
test();

// 3
// output: 'super cool'
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
};
console.log(brendan);
// interpreted vision
var brendan = 'super cool';
function print(){
    var brendan;
    brendan = 'only okay';
	console.log(brendan);
};
console.log(brendan);

// 4
// output: 'chicken', 'half-chicken'
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
// interpreted vision
var food = 'chicken';
function eat(){
    var food;
    food = 'half-chicken';
	console.log(food);
	food = 'gone';
}
console.log(food);
eat();

// 5
// output: TypeError: mean is not a function - it was invoked as a function prior to being declared a function.
// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);
// interpreted vision
// var mean;
// mean();
// console.log(food);
// mean = function() {
//     var food;
//     food = "chicken";
// 	console.log(food);
// 	food = "fish";
// 	console.log(food);
// }
// console.log(food);

// 6
// output: undefined', 'rock', 'r&b', 'disco'
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
// interpreted vision
var genre;
console.log(genre);
function rewind() {
    var genre;
    genre = "rock";
	console.log(genre);
	genre = "r&b";
	console.log(genre);
};
rewind();
genre = "disco";
console.log(genre);

// 7
// output: 'san jose', 'seattle', 'burbank','san jose'
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
// interpreted vision
var dojo;
function learn() {
    var dojo;
    dojo = "seattle";
	console.log(dojo);
	dojo = "burbank";
	console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);

// 8
// output:  {name: "Chicago", students: 65, hiring: true} , TypeError: Assignment to constant variable. - the function tried to mutate the object into a string and that is not allowed with const
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}
// interpreted vision
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

