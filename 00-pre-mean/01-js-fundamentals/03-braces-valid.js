// Given a string, write a function that will determine whether the braces  - including parentheses (), square brackets [], and curly brackets {} - within the string are
// valid. That means that any braces within other braces must close before the outer set closes.
// HINT: Keep in mind that you may use arrays and objects to keep your information organized!
// Example: bracesValid("{{()}}[]") returns true because the inner braces close before the outer braces. Each opening brace has a matching closing brace.
// Example:  bracesValid("{(})") returns false because the curly braces close before the parentheses, which starts within the curly braces, had a chance to close.

function bracesValid(stringo){
    var endCount= count= 0;
    var openArray = ["{","[","("];
    var closeArray = ["}","]",")"];
    var countArray = [0,0,0];
    for(var i=0; i<stringo.length; i++){
        for(var k=0; k<openArray.length; k++){
            if(stringo[i] === openArray[k]){
                count+=1;
                countArray[k]+=1;
            };
            if(stringo[i] === closeArray[k]){
                countArray[k]-=1;
            };
            if(countArray[k] < 0){
                return false;
            };
            if(count>1){
                if(stringo[i] === closeArray[k]){
                    count=0;
                    if(stringo[i-1] !== openArray[k]){
                        return false;
                    };
                };
            };
            if(i === stringo.length-1){
                if(countArray[k] > 0){
                    return false;
                }
                else if(countArray[k] === 0){
                    endCount+=1;
                    if(endCount === 3){
                        return true;
                    };
                };
            };
        };
    };
};
console.log(bracesValid("{(})"));
console.log(bracesValid("{{()}}[]"));
console.log(bracesValid("{{}}"));
console.log(bracesValid("{{}"));
console.log(bracesValid("}}{"));

