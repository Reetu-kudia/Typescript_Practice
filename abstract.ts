abstract class Animal{

    abstract sound():void;

    move(){
        console.log("Animal moves");
    }
}

class Dog extends Animal{

    sound(){
        console.log("Dog barks");
    }
}

let d = new Dog();
d.sound();
d.move();