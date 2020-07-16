class Bike{
    constructor(
        public price: number,
        public max_speed: number,
        public miles: number= 0){};
    displayInfo(){
        console.log(`bikePrice: ${this.price} - bikeMaxSpeed: ${this.max_speed} - bikeMiles: ${this.miles} !!!`);
        return this;
    }
    ride(){
        console.log(`Riding: was ${this.miles}`);
        this.miles+=10;
        console.log(`Riding: and now is ${this.miles}`);
        return this;
    }
    reverse(){
        console.log(`Reversing: was ${this.miles}`);
        this.miles-=5;
        console.log(`Reversing: and now is ${this.miles}`);
        return this;
    }
};
const bike1= new Bike(210,21),
    bike2= new Bike(321, 32),
    bike3= new Bike(432, 43);

bike1.ride().ride().ride().reverse().displayInfo();
bike2.ride().ride().reverse().reverse().displayInfo();
bike3.reverse().reverse().reverse();
