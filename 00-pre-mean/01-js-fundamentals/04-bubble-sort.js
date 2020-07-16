
// bubble sort with bonus1- fast exit
function bubble_sorter(arr){
    var swapp;
    var n= arr.length-1;
    var x=arr;
    do{
        swapp= false;
        for(var i=0; i<n; i++){
            if(arr[i]>arr[i+1]){
                var temp =arr[i];
                arr[i]= arr[i+1];
                arr[i+1]= temp;
                swapp= true;
            };
        }
        n--;
    }while(swapp);
    return x;
};
// console.log(bubble_sorter([6,5,3,1,8,7,2,4]))
// console.log(bubble_sorter([1,2,3,4,5,6,7,8]))

// bonus2- O(1)
function findNth(arr, n){
    console.log(arr[n]);
};
// findNth([1,2,3,4,5], 3);

// bonus2- O(N)
function printArray(arr){
    for(var i=0; i<arr.length; i++){
        console.log(arr[i]);
    };
};
// printArray([1,2,3,4,5]);

// bonus2- O(log N)
function halving(n){
    var count= 0;
    while(n > 1){
        n= n/2;
        count++;
    };
    return count;
};
// halving(20);

// bonus2- O(N2)
function identityMatrix(n){
    var matrix= [];
    for(var i=0; i<n; i++){
        var row= [];
        for(var j=0; j<n; j++){
            if(j==i){
                row.push(1);
            }
            else{
                row.push(0);
            };
        };
        matrix.push(row);
    };
    return matrix;
};
// identityMatrix(15);