function outer(){
    let counter = 5;
    return function inner(){
        counter++;
        return counter;
    }
}

let count = outer()
console.log(count())
console.log(count())
console.log(count())

// Lexical scoping
function init() {
  let name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  displayName();
}

init();