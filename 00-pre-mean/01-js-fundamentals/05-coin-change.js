function coinChange(amount){
    coins ={
        'dollars':0,
        'fifty_centpieces':0,
        'quarters':0,
        'dimes':0,
        'nickels':0,
        'pennies':0
    }
    while (amount >0){
        if (amount >=100){
            amount -= 100;
            coins["dollars"]+=1;
            }
        else if (amount >= 50){
            amount -= 50;
            coins["fifty_centpieces"]+=1;
            }
        else if (amount>=25){
            amount-=25;
            coins["quarters"]+=1;
            }
        else if (amount>=10){
            amount-=10;
            coins["dimes"]+=1;
            }
        else if (amount>=5){
            amount-=5;
            coins["nickels"]+=1;
            }
        else{
            amount-=1;
            coins["pennies"]+=1;
            };
        };
    return coins;
};
// console.log(coinChange(190))
// console.log(coinChange(76))
// console.log(coinChange(25))
// console.log(coinChange(9))

function coinChangeBonus(amount){
    var sum=0;
    var coinsBonus= {
        'dollars': 100,
        'quarters': 25,
        'dimes': 10,
        'nickels': 5,
        'pennies': 1
    }
    var endingCoins={};
    for(let key in amount){
        sum+=amount[key]*coinsBonus[key];
        // console.log(sum, amount[key])
    };
    for(let newKey in coinsBonus){
        let newKeyValue= coinsBonus[newKey];
        let newKeyCoin= Math.floor(sum/newKeyValue);
        sum -= newKeyCoin*newKeyValue;
        endingCoins[newKey]= newKeyCoin;
        // console.log(newKey, newKeyValue, newKeyCoin, endingCoins, sum);
    };
    return endingCoins;
};
console.log(coinChangeBonus({dollars: 2, dimes: 15, pennies: 5}))
