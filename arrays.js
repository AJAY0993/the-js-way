const movies= ['movie1', 'movie2', 'movie3']

console.log(movies[0])
console.log(movies[1])
console.log(movies[2])

// by for loop

for(i=0; i<movies.length; i++){
  console.log(movies[i])
}

// by for each

movies.forEach((x) => console.log(x))

// by for of loop


for(let i of movies)
{
  console.log(i)
}


movies[4]= 'movie5'
console.log(movies)

movies[3] = 'movie4'
console.log(movies)

delete movies[4]
console.log(movies)

for (let i of movies){
  console.log(i)
}

let poppedOutElement = movies.pop() 
console.log(movies)
console.log(poppedOutElement)


let pushedArrayLength = movies.push()
console.log(pushedArrayLength)

//Musketeers

let musketeers = ["Athos", "Porthos", "Aramis"]

for(i=0 ; i<musketeers.length; i++){
  console.log(musketeers[i])
}

musketeers.push("D'Artagnan") 

musketeers.forEach((x)=> console.log(x))

musketeers.pop()

for(let element of musketeers){
  console.log(element)
}

//sum of values

const values = [3, 11, 7, 2, 9, 10];

let sum = 0

// values.forEach((x)=> {
// sum+= x
// })

const sumOfValues = () => {for(let i of values){
  sum += i
} console.log(sum)}

sumOfValues()

// trying with for

console.log("with for loop")

sum  =0
function sumWithFor () {for(i=0 ;i<values.length; i++){
  sum += values[i]
} return sum}

console.log(sumWithFor())

// Array maximum


const valuesMax = [3, 11, 7, 2, 9, 10];
let max = valuesMax[0]

const checkingForMaxValue = () =>{for(i=0;i<valuesMax.length; i++){
  if(max <= valuesMax[i]){
    max =  valuesMax[i]
  }
}
      console.log(max)                            
                                  }

checkingForMaxValue()

// valuesMax.sort((a,b) => {
//   return a-b
// })
// console.log(valuesMax[valuesMax.length -1])


console.log(Math.max(...valuesMax))

// day stop

let word ;
let userWords =[]

function checkingForCorrectWord(){
while(word !== "stop"){
  word = prompt("enter your word")
  userWords.push(word)
}
  userWords.pop()
  console.log(userWords)
}

checkingForCorrectWord()
