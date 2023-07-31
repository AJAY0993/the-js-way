const num = Number(prompt("enter a number"))
// if (num>0){
//   console.log(`${num} is positive`)
// }
//   else {
//       if(num ===0){
//     console.log("number is  zero")}
//     else{
//       console.log("number is neagtive")
//     }
// }

// if(num >= 0 && num <= 100){
//   console.log("your number lies between 0 to 100")
// }

// if(num<0 || num>100){
//   console.log("your number doesnt lies between 0 to 100")
// }

let fruits = prompt("which fruit you want")
fruits = fruits.toLowerCase()
// console.log(fruits)
switch (fruits) {
  case "mango":
    console.log("mangoes are 100inr per kg");
    break

  case "oranges":
    console.log("oranges are 80inr per kg");
    break
  case "papaya":
    console.log("papaya is 80 inr")
    break

  case "grapes":
    console.log("grapes are 70inr")
    break
  case "guava":
    console.log("guava are 40inr per kg")
    break
  case "bananas":
    console.log("bananas are 50 inr per dozen")
    break

  default:
    console.log
      ("we dont have this fruit")

}

//following day

let day = prompt("enter day")
day = day.toLowerCase()

switch (day) {
  case "monday":
    console.log("today is monday")
    break
  case "tuesday":
    console.log("today is tuesday")
    break
  case "wednesday":
    console.log("today is wednesday")
    break
  case "thursday":
    console.log("today is thursday")
    break
  case "friday":
    console.log("today is friday")
    break
  case "saturday":
    console.log("today is saturday")
    break
  case "sunday":
    console.log("today is sunday")
    break
  default:
    console.log("pls a enter a valid day")
}

// number comparison 
number = 5
let num1 = Number(prompt("enter your number1"))
let num2 = Number(prompt("enter your number2"))

if (num1 > num2) {
  console.log("num2 is less than num1 ")
}
else if (num1 < num2) {
  console.log("num1 is lesser than num2")
}
else if (num1 === num2) {
  console.log("both numbers are equal")
}

//Final values


let nb1 = Number(prompt("Enter nb1:"));//1
let nb2 = Number(prompt("Enter nb2:"));//2
let nb3 = Number(prompt("Enter nb3:"));//3

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++;//2
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;//0
    nb3 = nb3 * 2 + nb2;//8
  }
}
console.log(nb1, nb2, nb3);//0,2,8

//number of days in month

let numberOfMonth = Number(prompt("enter month number"))
switch (numberOfMonth) {
  case 1:
    console.log("number of days in this months are 31")
    break
  case 2:
    console.log("number of days in this months are 28")
    break
  case 3:
    console.log("number of days in this months are 31")
    break
  case 4:
    console.log("number of days in this months are 30")
    break
  case 5:
    console.log("number of days in this months are 31")
    break
  case 6:
    console.log("number of days in this months are 30")
    break
  case 7:
    console.log("number of days in this months are 31")
    break
  case 8:
    console.log("number of days in this months are 31")
    break
  case 9:
    console.log("number of days in this months are 30")
    break
  case 10:
    console.log("number of days in this months are 31")
    break
  case 11:
    console.log("number of days in this months are 30")
    break
  case 12:
    console.log("number of days in this months are 31")
    break

  default:
    console.log("pls enter a valid month number")
}

// following seconds 
let hours = Number(prompt("enter the number of hours"))
let minutes = Number(prompt("enter the number of minutes"))
let seconds = Number(prompt("enter the number of seconds"))

if (hours > 23 || minutes > 59 || seconds > 59) {
  alert("pls enter a valid time")
}
else {
  if (seconds !== 59) {
    alert(`${hours}h ${minutes}m ${++seconds}s`)
  }
  else if (hours === 23 && minutes === 59 && seconds === 59) {
    alert("00h00m00s")
  }
  else if (hours !== 23 && minutes === 59 && seconds === 59) { alert(`${++hours}h 0m 0s`) }
  else if (hours !== 23 && minutes !== 59 && seconds === 59) {
    alert(`${hours}h ${++minutes}m 0s`)
  }
}
