var _ = {
    map: function(array, callBack){
        for(let index=0; index<array.length; index++){
            array[index]= callBack(array[index]);
        };
    },
    
    reduce: function(array, callBack, stop){
        let start= 0;
        if(!stop){
            stop= array[0];
            start= 1;
        };
        for(let index=start; index<array.length; index++){
            stop= callBack(array[index], stop);
        };
        return stop;
    },

    find: function(array, callBack){
        for(let index= 0; index<array.length; index++){
            if(callBack(array[index])){
                return array[index];
            };
        };
        return "Not a Indicey of this Array!"
    },
    
    filter: function(array, callBack){
        const tempArray= [];
        for(let index= 0; index<array.length; index++){
            if(callBack(array[index])){
                tempArray.push(array[index]);
            };
        };
        return tempArray;
    },
    
    reject: function(array, callBack){
        const tempArray= [];
        for(let index= 0; index<array.length; index++){
            if(!callBack(array[index])){
                tempArray.push(array[index]);
            };
        };
        return tempArray;
    }
};

const array= [3,6,9,12,15,18,21];
console.log(_.filter(array, function(i){ return i < 22; }))
console.log(_.find(array, function(i){ return i === 8; }))
console.log(_.reduce(array, function(i, stop){ return i+stop; }))
console.log(_.reject(array, function(i){return i%3 !== 0}))
_.map(array, function(i){ return i * 3; })
console.log(array);