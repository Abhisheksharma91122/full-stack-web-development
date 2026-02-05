function greet(name){
    this.name = name
    console.log("hello, ", name);
}

const greeting = new greet("Aditya")
console.log(greeting);


function Person(name, age) {
    this.name = name
    this.age = age
}

const p1 = new Person("Alice", 25)
const p2 = new Person("Bob", 30)
console.log(p1);
console.log(p2);


function Car(make, model) {
    this.make = make
    this.model = model
}

const c1 = new Car('toyota', 'safari')
console.log(c1);


function Tea(type){
    this.type = type;
    this.describe = function(){
        return `this is a cup of ${this.type}`
    }
}

const t1 = new Tea('masala chai')
console.log(t1.describe());


function Animal(species){
    this.species = species;
}

Animal.prototype.sound = function(){
    return `${this.species} make a sound`;
}

const dog = new Animal('Dog')
console.log(dog.sound());

function Drink(name){
    if(!new.target){
        throw new Error("drink must be call with new keyword!");
    }
    this.name = name;
}

let tea = new Drink('tea')
console.log(tea)
let coffe = new Drink('coffe')

function mobile(name, company){
    this.name = name
    this.company = company
}

const realme = new mobile('p4', 'realme')
console.log(realme.name)