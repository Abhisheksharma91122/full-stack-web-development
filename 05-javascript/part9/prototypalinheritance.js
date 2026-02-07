function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`hello ${this.name} sir`);
};

let Abhishek = new Person("Abhishek");
Abhishek.greet();
