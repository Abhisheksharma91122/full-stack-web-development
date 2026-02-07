function* generator(){
    yield 1
    yield 2
    yield 3
}

let gen = generator()
let genTwo = generator()
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

console.log(genTwo.next().value);
console.log(genTwo.next().value);