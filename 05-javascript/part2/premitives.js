//Number

let weight = 45;
let anotherWeight = new Number(45)

// console.log(typeof(weight));
// console.log(weight);
// console.log(anotherWeight.valueOf());

// Boolean
let isActived = true;
let isRealyActivated = new Boolean(true)

// console.log(typeof(isActived));
// console.log(typeof(isRealyActivated));
// console.log(isRealyActivated.valueOf())


//difference between Null and Undefined
let firstName = undefined;
let lastName = null;
// console.log(firstName);
// console.log(lastName);


//String

let firstString = 'Hello'
let anotherString = ' world'

let stringAddition = firstString + anotherString
// console.log(stringAddition);
let userName = "Abhishek"

let newStringonCatenation = `hello from ${userName}`
// console.log(newStringonCatenation);


//Symbol
let sm1 = Symbol("abhi")
let sm2 = Symbol("abhi")
console.log(typeof(sm1));
console.log(sm1);
console.log(sm2);

console.log(sm1 == sm2);
