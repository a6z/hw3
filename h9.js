'use strict'
class Person {
    constructor (name) {
     this.name = name;
    }
    printGreeting () {
        console.log(`Hi, I am ${this.name}!`);
    }
}

/*var person1 = new Person('Andrew');
person1.printGreeting();

var person2 = new Person('A6');
person2.printGreeting(); */

class Employee extends Person{
    constructor (name, job) {
        super(name); //從父類別尋找
        this.job = job
    }
    printGreeting () {
        super.printGreeting();
        console.log(`Hi, I am ${this.name},and I am a ${this.job}!`);
    }
}

var person1 = new Employee('Andrew','Teacher');
person1.printGreeting();

var person2 = new Employee('A6','Student');
person2.printGreeting();


