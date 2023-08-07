let newObject = new Object()
console.log(newObject)

let pen = {
  type:'ballPoint',
  color:'blue',
  brand:'reynolds'
}
console.log(`i do write with ${pen.color} color ${pen.type} pen of ${pen.brand}`)

pen.color = 'red'
pen.price = 10

console.log(`i do write with ${pen.color} color ${pen.type} pen of ${pen.brand}`)

console.log(pen.price)

// rpg game

let aurora ={
  name:"Aurora",
  health:100,
  strength:90,

  describe(){
    return `${this.name} has ${this.health} health points and ${this.strength}points and has gained xp ${aurora.xp}`
  }
}
console.log(aurora.describe())

// aurora learned a new skill 

aurora.xp = 0


aurora.xp += 15
console.log(aurora.xp)

// dog modeling

let dog= {
  name: 'jackie',
  specie: 'special',
  size:'big',

    describe(){
    return `name of dog is ${this.name} his specie is ${this.specie} and his size ${this.size}`
    }
  }
console.log(dog.describe())


//modeling  a circle

const  r = Number(prompt("enter your radius"))
const circle = {
  circumference: 2*Math.PI*r,
    area:Math.PI*(r**r),

  describe(){
  return `its circumference is ${this.circumference} \n
   its area is ${this.area}`
  }
}
console.log(circle.describe())

//Modeling a bank account


const account = {
  name: 'Alex',
  balance : 0 ,

credit(amount) {
this.balance += amount
},
  describe(){
    return `OWNER: ${this.name} BALANCE: ${this.balance}`
      }
  
}
account.credit(253523)
console.log(account.describe())

// console.log(` ${aurora.name} has health ${aurora.health} and strength ${aurora.strength}`)

// // aurora hit by a arrow

// aurora.health -= 10

// //aurora unclocked strength armor

// aurora.strength += 20

// console.log(` ${aurora.name} has health ${aurora.health} and strength ${aurora.strength}`)

// // function describe(character){
// //  console.log(`${character.name} has health ${character.health} and strength ${character.strength}`)
// // }

// // describe(aurora)
//  let obj = {
//    key1 : 'value1',
//    key2 : 'value2',
//    key3 : 'value3',
//    key4 : 'value4',
//    key5 : 'value5',

//    describe(){
//    return ` these are the values of object  ${obj.key1}, ${obj.key2}, ${obj.key3}, ${obj.key4}, ${obj.key5}`
//    }
//  console.log(obj.describe())
