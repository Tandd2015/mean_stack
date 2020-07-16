// // 1. Setting types
// var myString: string;
// // I can assign myString like this:
// myString = "Bee stinger";
// // Why is there a problem with this? What can I do to fix this?
// myString = 9;

var myString: string | number;
myString = "Bee stinger";
myString = 9;
// it was assigned as a string type and attempted to be declared as a number which through the typeError.

// 2. Setting the types for function parameters

// function sayHello(name: string){
//     return `Hello, ${name}!`;
// }
//      // This is working great:
// console.log(sayHello("Kermit"));
//      // Why isn't this working? I want it to return "Hello, 9!"
// console.log(sayHello(9));

function sayHello(name: string | number){
    return `Hello, ${name}!`;
}
console.log(sayHello("Kermit"));
console.log(sayHello(9));
//the parameter being passed into the function is of string type and it was attempt to get passed a arguement that was of number type
//which threw the error


// // 3. Optional parameters
// function fullName(firstName: string, lastName: string, middleName: string){
//     let fullName = `${firstName} ${middleName} ${lastName}`;
//     return fullName;
// }
//      // This works:
// console.log(fullName("Mary", "Moore", "Tyler"));
//      // What do I do if someone doesn't have a middle name?
// console.log(fullName("Jimbo", "Jones"));

// 3. Optional parameters
function fullName(firstName?: string, lastName?: string, middleName?: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
}
console.log(fullName("Mary", "Moore", "Tyler"));
console.log(fullName("Jimbo", "Jones"));
// it was attempted to console log the return value of the function but it was not passed enough arguements to
// to satisfy the required amount of parameters passed in to the function which through the error


// //4. Interfaces and function parameters
// interface Student {
//     firstName: string;
//     lastName: string;
//     belts: number;
// }
// function graduate(ninja: Student){
//     return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
// }
// const christine = {
//     firstName: "Christine",
//     lastName: "Yang",
//     belts: 2
// }
// const jay = {
//     firstName: "Jay",
//     lastName: "Patel",
//     belt: 4
// }
//     // This seems to work fine:
// console.log(graduate(christine));
//     // This one has problems:
// console.log(graduate(jay));

//4. Interfaces and function parameters
interface Student {
    firstName: string;
    lastName: string;
    belts: number;
}
function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
}
const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
}
console.log(graduate(christine));
console.log(graduate(jay));
// the instance in interface Student (jay) one of the keys was improperly typed and was missing a letter 

// //5. Classes and function parameters
// class Ninja {
//     fullName: string;
//     constructor(
//     public firstName: string,
//     public lastName: string){
//         this.fullName = `${firstName} ${lastName}`;
//     }
//     debug(){
//         console.log("Console.log() is my friend.")
//     }
// }
//     // This is not making an instance of Ninja, for some reason:
// const shane = Ninja();
//     // Since I'm having trouble making an instance of Ninja, I decided to do this:
// const turing = {
//     fullName: "Alan Turing",
//     firstName: "Alan",
//     lastName: "Turing"
// }
//     // Now I'll make a study function, which is a lot like our graduate function from above:
// function study(programmer: Ninja){
//     return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
// }
//     // Now this has problems:
// console.log(study(turing));

//5. Classes and function parameters
class Ninja {
    fullName: string;
    constructor(
    public firstName: string,
    public lastName: string){
        this.fullName = `${firstName} ${lastName}`;
    }
    debug(){
        console.log("Console.log() is my friend.")
    }
}
const shane = new Ninja('Daniel','Beatty');
const turing = new Ninja('Alan', 'Turing');

function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
console.log(study(turing));
//1 the const with the value of Ninja class was not set without new and requires two arguements to satisfy the required parameters
//needing to get passed into the function.
//2. the study function only accpets objects of Ninja Class where is it was delcared a regular object through other conventions.

// //6. Arrow functions
// var increment = x => x + 1;
// // This works great:
// console.log(increment(3));
// var square = x => {x * x};
// // This is not showing me what I want:
// console.log(square(4));
// // This is not working:
// var multiply = x,y => x * y;
// // Nor is this working:
// var math = (x, y) => let sum = x + y;
//     let product = x * y;
//     let difference = Math.abs(x-y);
//     return [sum, product, difference];

//6. Arrow functions
var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => x * x;
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = (x, y)=> x * y;
// Nor is this working:
var math = (x: number, y: number) => {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x-y);
    return [sum, product, difference];
}
//1.removed curly brackets from the var so it removed the parameter type off of the return value of the 
//function so now all types are any or you can wrap them in parenthesis and set it to be a number type.
//2.encapsulated the parameters inside of parenthesis's setting them to any types
//3.the parameters were set to be any type which conflicts with the type of parameter than is need to be passed in when the Math.abs() function
//is invoked changed them to number, changed the parametr types to be number types and the function neeeded to be encapsulated in curly brackets

// //7. Arrow functions and 'this'
// class Elephant {
//     constructor(public age: number){}
//     birthday = function(){
//         this.age++;
//     }
// }
// const babar = new Elephant(8);
// setTimeout(babar.birthday, 1000)
// setTimeout(function(){
//     console.log(`Babar's age is ${babar.age}.`)
// }, 2000)
//     // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.

//7. Arrow functions and 'this'
class Elephant{
    constructor(public age: number){}
    birthday = ()=>{
        this.age++;
    }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
}, 2000)
//the es6 class required the es6 arrow function to use this properly instead of trying to use es5 logic on this