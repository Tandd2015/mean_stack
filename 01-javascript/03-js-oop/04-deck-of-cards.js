class Card{
    constructor(suit, stringValue, numericalValue){
        this.suit= suit;
        this.stringValue= stringValue;
        this.numericalValue= numericalValue;
    };
    show(){
        console.log(`Card Suit: ${this.suit}, Card Name: ${this.stringValue}, Card Value: ${this.numericalValue}.`)
        return this;
    };
}

class Deck{
    constructor(){
        this.deckMade=[];
        this.deckReset();
        this.deckShuffle();
    };

    deckReset(){
        this.deckMade=[]
        const suiter=["Hearts", "Diamonds", "Clubs", "Spades"];
        const mainDictation={Two: 1, Three: 2, Four: 3, Five: 4, Six: 5, Seven: 6, Eight: 7, Nine: 8, Ten: 9, Jack: 10, Queen: 11, King: 12, Ace: 13};

        for(let index=0; index<suiter.length; index++){
            for(let key in mainDictation){
                this.deckMade.push(new Card(suiter[index], key, mainDictation[key]));
            };
        };
        return this;
    };

    deckShuffle(){
        const { deckMade } = this;
        let deckLen = deckMade.length, mathFloor;
        while(deckLen){
            mathFloor = Math.floor(Math.random() * deckLen--);
            [deckMade[deckLen], deckMade[mathFloor]]=[deckMade[mathFloor], deckMade[deckLen]];
        };
        return this;
    };

    deckDeal(){
        return this.deckMade.pop();
    };

};

class Player{
    constructor(name){
        this.name= name;
        this.hand= [];
    };
    
    playerDraw(deckMade){
        this.hand.push(deckMade.deckDeal())
        return this;
    };
    
    playerDiscard(){
        this.hand.pop();
        return this;
    };
};

var readyPlayerOne = new Player("Daniel")
var newDeckOne= new Deck();
// console.log(newDeckOne);
readyPlayerOne.playerDraw(newDeckOne).playerDraw(newDeckOne).playerDiscard();
console.log(readyPlayerOne);

// card1= new Card('Diamonds', 'Ace', 13);
// card1.show();

// var newDeck1= new Deck(suiter, mainDictation);
// newDeck1.deckDeal();
// console.log(newDeck1);