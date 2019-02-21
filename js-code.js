// Date
console.log(new Date().toString())
console.log(new Date().toLocaleTimeString('fi-fi'))
console.log(new Date("2018-12-24").toString())
console.log(new Date(Date.parse('2019-01-26T13:51:50.417-07:00')).toString())

// Following parameters are passed to every Java Script function
// exports, require, module, __filename ja__dirname
console.log(exports);
console.log(require);
console.log(module);
console.log(__filename);
console.log(__dirname);

// Data types
console.log(typeof undefined) // undefined
console.log(typeof 0)     // number
console.log(typeof true)  // boolean
console.log(typeof "foo") // "string
console.log(typeof Symbol("id")) // symbol
console.log(typeof Math)  // object  (1)
console.log(typeof null)  // object  (2)
console.log(typeof alert) // function(3)
let x = 15
let s = String(x)
let n = Number(s)
let b = Boolean(s)
console.log('X:', x, (typeof x)) // number
console.log('s:', s, (typeof s)) // string
console.log('n:', n, (typeof n)) // number
console.log('b:', b, (typeof b)) // boolean

// Arrays
let varit = ['Red', 'Blue', 'Green']; // Preferred way of initializing an Array
console.log(typeof varit)  // object
let sininen = varit[1];
let vareja = new Array('Red', 'Blue', 'Green');
let vihrea = vareja[2];
vareja.push('Yellow');
console.log('Väreja:', vareja)

// ... Syntax
let ar1 = [1, 2, 3]
let ar2 = [...ar1, 4, 5]
console.log('AR1 items:', ...ar1)
console.log('AR1:', ar1)
console.log('AR2:', ar2)
let obj1 = { name: 'John', age: 44 }
console.log('OBJ1:', obj1)
console.log('OBJ1 properties:', { ...obj1 })
let obj2 = { ...obj1, age: 55, lastName: 'Smith' }
console.log('OBJ1:', obj1)
console.log('OBJ2:', obj2)

// If then else
let x = 3;
if (x === 1) {
    console.log('One');
} else if (x === 2) {
    console.log('Two');
} else if (x === 3) {
    console.log('Three');
} else if (x === 4) {
    console.log('Four');
} else {
    console.log('More than 4');
}

// Loops
for (let property1 in vareja) {
    console.log('Väri: ' + vareja[property1])
}
for (let i = 0; i < vareja.length; i++) {
    console.log('Väri: ' + vareja[i]);
}
// For loop
for (let i = 0; i < 10; i++) {
    console.log('For: ' + i);
}
// While loop
let i = 0;
while (i < 10) {
    if (i < 5) {
        console.log('while <: ' + i);
    }
    else {
        console.log('while >: ' + i);
    }
    i++;
}
// Switch statement
let fruit = 'Apple';
switch (fruit) {
    case "Banana":
        console.log('I hate Bananas');
        break;
    case "Apple":
        console.log('I love Apples');
        break;
    default: console.log('NO MATCH');
}

// Functions
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}
// Arrow function
const toCelsius_2 = (fahrenheit) => {
    return (5 / 9) * (fahrenheit - 32);
}
console.log(toCelsius(100));
console.log(toCelsius_2(100));

// Using closure to return a function that remembers it outer variables
function makeAdder(x) {
    function add(y) {
        return y + x // inner function 'add' has a closure over x
    }
    return add
}
var plusTen = makeAdder(10)
console.log(plusTen(13)) // -> 23
console.log(makeAdder(10)(13)) // -> 23
//  makeAdder can be siplified with curring:
let makeAdder2 = (x) => (y) => y + x

// Currying functions (Partial functions)
let fun_1 = name => address => phone => name + ' lives in ' + address + '. (phone:' + phone + ')';
let fun_2 = (name) => {
    return ((address) => {
        return ((phone) => {
            return (name + ' lives in ' + address + '. (phone:' + phone + ')');
        })
    })
}
console.log(fun_1('Nimi 1')('Katuosoite 1')('050-123'));
console.log(fun_2('Nimi 2')('Katuosoite 2')('050-456'));

// Using Currying to pass a function as an argument
const myFun1 = (x) => () => {
    return x * x
}
console.log('myFun1 viittaus:', myFun1)
console.log('myFun1 funktio :', myFun1())
console.log('myFun1 suoritus:', myFun1(3)())
// Argument to myFun1 is given at definition
const runMe1 = myFun1(3)
console.log('runMe1 suoritus:', runMe1())

// Second way of using arrow functions
const myFun2 = () => (x) => {
    return x * x
}
console.log('myFun2 viittaus:', myFun2)
console.log('myFun2 funktio :', myFun2())
console.log('myFun2 suoritus:', myFun2()(3))
const runMe2 = myFun2()
// Argument to myFun2 is given at runtime
console.log('runMe2 suoritus:', runMe2(3))

// There is a special array-like object named arguments that contains all arguments by their index.
// Huom: Arrow functions do not have "arguments"
function showFunctionArguments() {
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
}
showFunctionArguments()

// Anonymous function - Notice no arguments are defined
let avg = function () {
    let sum = 0;
    for (let i = 0, j = arguments.length; i < j; i++) {
        sum += arguments[i];
    }
    return sum / arguments.length;
};
console.log(avg)
console.log(avg(2, 4, 6))

// Objects
let person = {
    firstName: 'Etunimi',
    lastName: 'Sukunimi',
    address: { // Inner object
        street: 'Katuosoite 15',
        city: 'Kaupunki'
    },
    getFullName: function () { // Method
        return this.firstName + ' ' + this.lastName;
    }
}
console.log(person.address.street);
console.log(person.getFullName());

// Class = function in JavaScript
function Fruit(aName, aColor) {
    this.name = aName
    this.color = aColor

    this.describe = function () {
        return 'Fruit: ' + this.name + ' is ' + this.color
    }
}
let omena = new Fruit('Omena', 'Punainen')
console.log(omena)
console.log(omena.describe())

// Try - Catch errorhandling
function testingTryCatch() {
    let x = 4
    try {
        if (x == "") throw "X is empty"
        if (isNaN(x)) throw "X is not a number"
        debugger;  // Debugger in browser stops here, if it is on
        x = Number(x)
        if (x > 10) throw "X is too high"
        if (x < 5) throw "X is too low"
    }
    catch (err) {
        console.log(err)
    }
    finally {
        console.log("Finally will be performed in any case. X = " + x)
    }
}
testingTryCatch()

// Delayed run using timeout
function aja() {
    console.log('Delayed run')
}
setTimeout(aja, 1000) // Will run in 1 second
let x = 2
setTimeout(() => { console.log(`Online function is run in ${x} seconds`) }, x * 1000)
setTimeout(() => console.log("World"), 0)
console.log("Hello")  // => Hello World

// Array Functions
let animals = [
    { name: 'Fred', species: 'fish', price: 100 },
    { name: 'Dave', species: 'dog', price: 300 },
    { name: 'Duke', species: 'dog', price: 400 },
    { name: 'Bob', species: 'cat', price: 200 }
]
console.log(animals.slice(0))
console.log(animals.slice(1))
console.log(animals.find((x) => x.species === 'dog')) // returns the first dog
console.log(animals.filter((x) => x.species === 'dog')) // returns an array of all the dogs
console.log(animals.map((x) => x.name)) // returns an array of the names
console.log(animals.reduce((z, x) => z + x.price, 1)) // returns z - sums the statement to z on every loop
animals.forEach((x) => { console.log('Do whatever', x) })

// Case insensitive String contains
let sentence = 'The quick brown fox jumped over the lazy dog.';
let sentenceUpper = sentence.toUpperCase();
let word = 'Fox'; // Capitalized
let wordUpper = word.toUpperCase();
console.log(sentence);
console.log(sentenceUpper);
console.log(word);
console.log(wordUpper);
console.log(sentence.includes(word));
console.log(sentenceUpper.includes(wordUpper));
console.log(sentence.toUpperCase().includes(word.toUpperCase()));

// Environment variables (if set)
// MONGO USER: mina
// MONGO PSW : pois
const MONGO_USER = process.env.MONGO_USER
const MONGO_PSW = process.env.MONGO_PSW
console.log('MONGO USER:', MONGO_USER)
console.log('MONGO PSW :', MONGO_PSW)

// Async functions
let promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('foo')
    }, 2000)
})
promise1.then(function (value) {
    console.log(value) // expected output: "foo"
})
console.log(promise1) // expected output: Promise { <pending> }

const fun = (ok) => {
    return new Promise((resolve, reject) => {
        if (ok) {
            resolve('OK') // This should be a long lasting task
        }
        else {
            reject(new Error('Not Ok!'))
        }
    })
}

Promise.all([
    fun(true),
    fun(true), // an error is thown, if argument is set to false
    fun(2)
])
    .then((ar) => { console.log(ar) })
    .catch((error) => { console.log('ERROR:', error) })

// More Promises
function myPromiseReturningFunction() {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => { resolve('Ok after 2 seconds') }, 2000)
            //throw new Error('OOPS!')
        }
        catch (err) {
            resolve(err)
        }
    })
}
// Async - Await
async function callMyPromiseReturningFunction() {
    let value = await myPromiseReturningFunction()
    console.log(value)
}
callMyPromiseReturningFunction()

// JSON
let student1 = {
    name: 'John',
    age: 30,
    courses: ['html', 'css', 'js']
}
let studentJ = JSON.stringify(student1)
let student2 = JSON.parse(studentJ)
console.log('Student1:', student1)
console.log('StudentJ:', studentJ)
console.log('Student2:', student2)
