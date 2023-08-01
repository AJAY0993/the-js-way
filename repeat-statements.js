/*let number = 1
while(number<6)
{
  console.log(number)
  number++
}

//carousel

let carouselNumber = Number(prompt("enter number")) 
for(i=1; i<=carouselNumber;i++){
  console.log(i)
}


//parity

let num = Number(prompt("enter any number between 2 to 10"))

for (i = num; i<=num; i++ ){

  if(i%2 === 0){
    console.log(`${i} is a even number`)
  }
  else if(i%2 !== 0 ){
    console.log(`${i} is a odd number `)
  }
  else {
    console.log("enter correct number")
  }
}
*/
//input validation

//stage 1
/*let correctNumber = 999;
 while(!(correctNumber <=100) ){
   i = prompt("enter correct number")
   correctNumber = Number(i)
 }
console.log("great!")?*/
// let correctNumber = 999
// while(!(correctNumber <= 100 && correctNumber > 50)){
//   correctNumber = Number(prompt("enter correct number"))
// }
// console.log("great!")

// multiplication table

let userInputNumber = Number(prompt("enter any number"))
if(userInputNumber <= 9 && userInputNumber >= 2  ){
for(i=1; i<=10; i++){
  console.log(`${userInputNumber} multiplied by ${i} is ${userInputNumber * i}`)
}
}
else{
  console.log("enter number between 2 and 9")
}

let c1 = "yes";
let c2 = "no";
let game;
while(game != c1 && game != c2 ){

  game = prompt("enter yes or no").toLowerCase()
}
console.log("congo!")

//fizzbuzz

/*
for(i=1; i<=100; i++){

  if(i%3 !==0 && i%5 !== 0 ){
    console.log(i)
  }
    
  else if(i%3 === 0 ){
   console.log("fizz")
  }
  else if(i%5 === 0) {
    console.log("buzz")
    } 
}
*/


for(i=1; i<=100; i++){

  if(i%3 !==0 && i%5 !== 0 ){
    console.log(i)
  }
    else if(i%3 ===0 && i%5 === 0 ){
      console.log("fizzbuzz")
    }
  else if(i%3 === 0 ){
   console.log("fizz")
  }
  else if(i%5 === 0) {
    console.log("buzz")
    } 
}


