'use strict'
class Person {
    constructor (name) {
     this.name = name; //初始化
    }
    printGreeting () {
        console.log(`Hi, I am ${this.name}!`);
    }
}

var person1 = new Person('Andrew');
person1.printGreeting();

var person2 = new Person('A6');
person2.printGreeting();
