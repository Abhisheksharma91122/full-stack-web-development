// Bind
let person = {
  name: "Abhishek",
  list: [1, 2, 3],
  greet() {
    console.log(`Hi, i am ${this.name}`);
  },
};

person.greet();

let greetFunction = person.greet;
greetFunction();

let boundGreet = person.greet.bind({ name: "John" });
boundGreet();

// Call
let nameObj = {
  name: "Tony",
};

let PrintName = {
  name: "steve",
  sayHi: function (age) {
    console.log(this.name + " age is " + age);
  },
};

PrintName.sayHi.call(nameObj, 45);

// Apply
let nameObj1 = {
    name: "Tony"
}

let PrintName1 = {
    name: "steve",
    sayHi: function (...age) {
        console.log(this.name + " age is " + age);
    }
}
PrintName1.sayHi.apply(nameObj1, [42]);