// 30 minutes max
// Challenge 1
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function studentShow(arr){
    let newString="";
    for(var i=0; i<arr.length; i++){
        newString=`Name: ${arr[i].name}, Cohort: ${arr[i].cohort}`;
        console.log(newString);
    };
};
studentShow(students)

// Challenge 2
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
        {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
        {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};

function characterCount(newDict){
    let check= false;
    let counter=0;
    let theNewStr='';
    for(index in newDict){
        console.log(index.toUpperCase());
        for(i of newDict[index]){
            if (index === "employees"){
                counter+=1
                theNewStr=`${counter} - ${i.last_name}, ${i.first_name} - ${i.first_name.length + i.last_name.length}`
                console.log(theNewStr);
            }
            else if(index === "managers" && check === false){
                counter= 1;
                check= true;
                theNewStr=`${counter} - ${i.last_name}, ${i.first_name} - ${i.first_name.length + i.last_name.length}`
                console.log(theNewStr);
            }
            else if(index === "managers" && check === true){
                counter+=1;
                theNewStr=`${counter} - ${i.last_name}, ${i.first_name} - ${i.first_name.length + i.last_name.length}`
                console.log(theNewStr);
            };
        };
    };
};
characterCount(users);