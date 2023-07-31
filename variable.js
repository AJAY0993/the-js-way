// const a = "hello"
// const b = 6
// const c = a*b
// console.log(c)

// let d  = "4"
// d = Number(d)
// console.log(d*b)

// const name = prompt("Enter your first name:");
// alert(`Hello, ${name}`);

let firstName = prompt("enter your first name")
let lastName = prompt("enter your last name")

console.log( `${firstName} ${lastName}`)

let a = 2;//2
a -= 1;//1
a++;//2  
let b = 8;//8
b += 2;//10
const c = a + b * b;//102
const d = a * b + b;//30
const e = a * (b + b);//40
const f = a * b / a;//10
const g = b / a * a;//10
console.log(a, b, c, d, e, f, g);


// vat calculation



const rawPrice = Number(prompt("enter your price"))
alert(  rawPrice + rawPrice*(20.6/100))

//temperature converter

let tempInCelsius = Number(prompt("enter temp in celsius"))
console.log("temp in farenheit is" ,tempInCelsius * 9/5 + 32)

// variable swaping

let numberOne = 6
let numberTwo = 9

numberOne = numberTwo 
numberTwo = 6
console.log(numberOne, numberTwo)
