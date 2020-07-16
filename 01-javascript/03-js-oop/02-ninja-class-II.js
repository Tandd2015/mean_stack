function Ninja(name){
    var self= this;
    var speed= 3;
    var strength= 3;
    
    self.name= name;
    self.health= 100;
    
    self.showStats= function(){
        console.log("Name: " + self.name + ', ' + "Health: " + self.health + ', ' + "Speed: " + speed + ', ' + "Strength: " + strength)
        return self;
    };
    
    self.sayName= function(){
        console.log("My ninja name is " + self.name +"!");
        return self;
    };
    self.drinkSake= function(){
        self.health+=10;
        return self;
    };

    self.punch= function(ninjadPunched){
        if(ninjadPunched instanceof Ninja){
            ninjadPunched.health-=5;
            self.health+=5;
            console.log(ninjadPunched.name + "was punched by " + self.name + " and lost 5 Health!")
        }else{
            console.log("Your Definitely not a Ninja1")
        };
        return self;
    };

    self.kick= function(ninjadKicked){
        if(ninjadKicked instanceof Ninja){
            ninjadKicked.health-=(strength*15);
            console.log(ninjadKicked.name + " was kicked by " + self.name + " and lost "+ strength*15 + " Health!")
        }else{
            console.log("Your Definitely not a Ninja")
        }
        return self;
    };
    return self;
};

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();

var blueNinja = new Ninja("Geomon");
var redNinja = new Ninja("Bill Gates");

redNinja.punch(blueNinja).showStats();
blueNinja.kick(redNinja).showStats();


