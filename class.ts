class Student{

    name:string;

    constructor(name:string){
        this.name = name;
    }

    display(){
        console.log("Student Name:", this.name);
    }
}

let s1 = new Student("Reetu");
s1.display();