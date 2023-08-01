/*function myFunction(){
  console.log("hello world!")
}

myFunction()
let  z = 9;
function b(){
  console.log("hello world")
   return z+9
}

let fName = prompt("enter your first name")
let lName = prompt("enter your last name")
 let a = b()
console.log(a)
function f2(a,b){
  console.log(a,b)
}

f2(fName,lName)*/

// improved hello
/*let fName  = prompt("enter first name")
let lName  = prompt("enter last name")

function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}
alert(sayHello(fName,lName))*/

//square 

function square1(num){
return num*num  
}
console.log(square1(9))

const square = (num)=>{
  return num*num
}

console.log(square(8))


for(i=1; i<=10;i++){
  console.log(square(i))}



console.log(Math.min(1,2,3,4,5,6,7,8))

function min(a,b){
  if(a>b){
    console.log(a)}

  else if(b>a){
    console.log(b)}
  else{
    console.log("bong! bothh are eqaul")
  }
}

min(436,47)

//calculator

const calculate  = function (a,b,c){
  if(b === "+"){
    return a + c
  }
  else if(b === "-"){
    return a - c
  }
  else if(b === "/"){
    return a / c
  }
  else if(b === "*"){
    return a * c
  }
}

console.log(calculate(1, "*", 6))

// circumference and area of circle
function area(r){
  return Math.PI*r*r
}

function circumfrence(r){
   return 2*Math.PI*r
}

function areaAndCircumfrence(r){
 console.log(area(r))
  console.log((circumfrence(r)))
            
}

areaAndCircumfrence(9)
