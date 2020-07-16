function Ninja(name){
    var speed= 3;
    var strength= 3;
    
    this.name= name;
    this.health= 100;
    
    this.showStats= function(){
        console.log("Name: " + this.name + ', ' + "Health: " + this.health + ', ' + "Speed: " + speed + ', ' + "Strength: " + strength)
    };
    
    this.sayName= function(){
        console.log("My ninja name is " + this.name +"!");
    };
    this.drinkSake= function(){
        this.health+=10;
    };
};

var ninja1 = new Ninja("Hyabusa");

ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();

