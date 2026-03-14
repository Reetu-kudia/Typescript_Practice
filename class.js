var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
    }
    Student.prototype.display = function () {
        console.log("Student Name:", this.name);
    };
    return Student;
}());
var s1 = new Student("Reetu");
s1.display();
