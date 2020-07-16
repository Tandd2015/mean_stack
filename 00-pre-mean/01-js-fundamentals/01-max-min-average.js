// Write a function that takes an array of numbers as a parameter. Find the maximum number, the minimum number, 
// and the average of all the numbers in the array. Return these values in a nicely formatted string.

// Example: maxMinAvg([1, -2, 9, 4]) returns "The minimum is -2, the maximum is 9, and the average is 3."

function maxMinAvg(array){
    var max= min= sum= array[0];
    for(let i=1; i<array.length; i++){
        sum+=array[i];
        if(array[i] < min){
            min= array[i];
        };
        if(array[i] > max){
            max= array[i];
        }
    };
    var avg= sum/array.length;
    return ("The minimum is " + min + " the maximum is " + max + " and the average is " + avg);
};
console.log(maxMinAvg([1, -2, 9, 4]));

