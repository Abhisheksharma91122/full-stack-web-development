const fruitValues = {
    apple: 52,
    ramfal: 89,
    orange: 150
}

const computer = {
    cup: 12
}

const lenovo = {
    screen: "HD",
    __proto__: computer
}


console.log(lenovo.__proto__);
console.log(lenovo.__proto__.cup);

const genericCar = {
    tyres: 4
}

const tesla = {
    driver: "AI"
}

Object.setPrototypeOf(tesla, genericCar)
console.log(tesla.tyres);
console.log(`tesla: `, Object.getPrototypeOf(tesla))
console.log(tesla.hasOwnProperty("tyres"));
