users = [
    {
        fname: "Kermit",
        lname: "the Frog",
        languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
        interests: {
            music: ["guitar", "flute"],
            dance: ["tap", "salsa"],
            television: ["Black Mirror", "Stranger Things"]
        }
    },
    {
        fname: "Winnie",
        lname: "the Pooh",
        languages: ["Python", "Swift", "Java"],
        interests: {
            food: ["honey", "honeycomb"],
            flowers: ["honeysuckle"],
            mysteries: ["Heffalumps"]
        }
    },
    {
        fname: "Arthur",
        lname: "Dent",
        languages: ["JavaScript", "HTML", "Go"],
        interests: {
            space: ["stars", "planets", "improbability"],
            home: ["tea", "yellow bulldozers"]
        }
    }
]

function userLanguages(users){
    new_string_holder=[];
    for(var i=0; i<users.length; i++){
        let new_string=`${users[i].fname} ${users[i].lname} knows `;
        if(users[i].languages===users[i].languages){
            for(var k=0; k<users[i].languages.length; k++){
                if(k===users[i].languages.length-1){
                    new_string+=`and ${users[i].languages[k]}.`;
                }else{
                    new_string+=`${users[i].languages[k]}, `;
                };
            };
        };
        console.log(new_string);
        var count1= 0;
        if(users[i].interests===users[i].interests){
            var new_string2=`${users[i].fname} is also interested in `;
            for(key in users[i].interests){
                count1+=1
                for (newKey in users[i].interests[key]){
                    new_string2+=`${users[i].interests[key][newKey]}, `;
                };
            };
        };
        console.log(new_string2);
        new_string_holder.push(new_string);
        new_string_holder.push(new_string2);
    };
    return new_string_holder;
};
userLanguages(users);