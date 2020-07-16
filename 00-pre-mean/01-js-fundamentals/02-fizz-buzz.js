// Use of the modulus operator
// Familiarity with loops
// Familiarity with conditionals
// Create a function called fizzbuzz that accepts a parameter n. Have the function log all the numbers from 1 to n in order with the following exceptions:

// If the number is divisible by both 3 and 5, log "FizzBuzz" instead of the number
// If the number is divisible by 3 but not by 5, log "Fizz" instead of the number
// If the number is divisible by 5 but not by 3, log "Buzz" instead of the number
// Write your code and run it with several examples to ensure it is working as expected. Use the modulus operator!

// Example - fizzbuzz(15) would log the following (each element on its own line):

function fizzbuzz(n){
    var new_string="";
    if (isNaN(n)){
        n= n.length;
    };
    
    if(n%2 !== 0){
        return "Parameter must be a positive number";
    };

    for(var i=1; i<=n; i++){
        if(i !== n){
            if(i%3 === 0 && i%5 === 0){
                new_string+="FizzBuzz, ";
            }
            else if(i%3 === 0 && i%5 !== 0){
                new_string+="Fizz, ";
            }
            else if(i%5 === 0 && i%3 !== 0){
                new_string+="Buzz, "
            }else{
                new_string+=`${i}, `;
            };
        }else{
            if(i%3 === 0 && i%5 === 0){
                new_string+="and FizzBuzz";
            }
            else if(i%3 === 0 && i%5 !== 0){
                new_string+="and Fizz";
            }
            else if(i%5 === 0 && i%3 !== 0){
                new_string+="and Buzz"
            }else{
                new_string+=`and ${i}`;
            };
        };
    };
    return new_string;
};
console.log(fizzbuzz(20));
console.log(fizzbuzz("four"));