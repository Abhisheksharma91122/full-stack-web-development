let car = {
    make: "Toyota",
    model: "Camery",
    year: 2020,
    start: function() {
        return `${this.make} car got started in ${this.year}`
    },
}

// console.log(car.start());


function Person(name, age) {
    this.name = name
    this.age = age
}

let john = new Person('john Doe', 20)
// console.log(john);

function Animal(type) {
    this.type = type
}

Animal.prototype.speak = function () {
    return `${this.type} make sound`
}

let dog = new Animal('dog')
// console.log(dog.speak());

Array.prototype.Abhishek = function () {
    return `this is a custom method ${this}`
}

let arr = [1, 2, 3]
// console.log(arr.Abhishek());


// class and inheritance 
class Vehicle{
    constructor(make, model){
        this.make = make
        this.model = model
    }

    start(){
        return `${this.model} is a car from ${this.make}`
    }
}

class Car extends Vehicle{
    drive(){
        return `${this.make}: this is a example of inheritance`
    }
}

let myCar = new Car('Toyota', 'Inova')
// console.log(myCar.start());
// console.log(myCar.drive());


let vehOne = new Vehicle('toyota', 'inova')
// console.log(vehOne.make);


// Encapsulation
class BankAccount{
    #balance = 0;
    
    deposite(amount){
        this.#balance += amount;
        return this.#balance;
    }

    getBalance(){
        return `$ ${this.#balance}`
    }
}

let account = new BankAccount()
// console.log(account.deposite(2500))
// console.log(account.getBalance())


// Abstraction

class ImplementAbstraction{
    set(x, y){
        this.x = x;
        this.y = y;
    }

    display(){
        console.log(`a = ${this.x}`)
        console.log(`b = ${this.y}`)
    }
}

const obj = new ImplementAbstraction()
// obj.set(1, 45)
// obj.display()

// Polymorphism

class Brid{
    fly(){
        return `Flying...`
    }
}

class Penguin extends Brid{
    fly(){
        return `Penguin can't fly`
    }
}

let brid = new Brid()
let penguin = new Penguin()

// console.log(brid.fly())
// console.log(penguin.fly())


// Static

class Calculator{
    static add(x, y){
        return x + y;
    }
}

// console.log(Calculator.add(4, 8))

// Getter and Setter

class Employee{
    #salary
    constructor(name, salary){
        if(salary < 0){
            throw new Error("Salary cannot be in negative!");
            
        }
        this.name = name;
        this.#salary = salary;
    }

    get salary(){
        return `you are not allowed to see salary`
    }

    set salary(value){
        if (value < 0) {
            throw new Error("Salary cannot be in negative!");
        }else {
            this.#salary = value;
        }
    }
}

let emp1 = new Employee('Mohan', 56000)
console.log(emp1.salary)
emp1.salary = 48000
