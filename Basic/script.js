
// *************************VARIABLES*************************************
const accountId = 32342;
let accountemail = "shivam@gmail.com"
var accountPass = "1232123"
let actstate;


accountemail = "mis@.com"
accountPass = "444444"

//console.table([accountemail,accountPass,actstate]);



// ****************************DATA TYPE**************************************
    //   Primitive
      //    7 type - String, Number , Boolean , null ,undefined,Symbol,BigInt

    // REfrence and Non Primitive
      // Array , Object , Function

   // **JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime.**


   let Id = Symbol('323')
   let AnotherId = Symbol('323')
   //console.log(Id == AnotherId)

let score = "444aca"

//console.log(typeof(score))

let ValueinNumber = Number(score)//Convert string into number
// console.log(ValueinNumber) //Not A Number
// console.log(typeof(ValueinNumber))


//***********************************OPERATION****************************

// console.log(2+'2')
// console.log('3'+4+5)
// console.log(9+4+'5')

// console.log(+true)
// console.log(+'')

let gameCounter = 100
gameCounter++
// console.log(gameCounter)

// **************************************COMPRISON*************************************

// console.log("2">1)
// console.log("2">"1")

// console.log(null >0)
// console.log(null <0)
// console.log(null == 0)
// console.log(null >=0)
// console.log(null == null)

// console.log(undefined >0)
// console.log(undefined <0)
// console.log(undefined == 0)
// console.log(undefined >=0)


// NOTE: Comprison convert null to a Number,treating it as 0.
//       That's why  null >=0 is true and null >0 is false


//***************************STRING********************** */

const name = 'Shivam'
const repoCount = 22

//console.log(`Hello my name is ${name} and my repo is ${repoCount}`)

const anotherWay = new String('GOT')
//console.log(anotherWay)


//**************************NUMS AND MATH *************************/

//NUMBER
const score1 = new Number(3234)
// console.log(score1)
// console.log(score1.toString())
// console.log(score1.toFixed(3))

// const score2 = 533.5522
// console.log(score2.toPrecision(3))

// const otherNo = 100000
// console.log(otherNo.toLocaleString())

// Math

// console.log(Math.abs(-3))
// console.log(Math.round(54.5))
// console.log(Math.ceil(5.5))
// console.log(Math.floor(4.5))
// console.log(Math.min(3,5,7,88,99))
// console.log(Math.max(5,555,3,3,5))

// console.log(Math.random())    //0 to 1
// console.log(Math.random() * 10 +1)    
// console.log(Math.floor((Math.random() * 10 )+1)  )  


//************************DATE AND TIME********************* */

let myDate = new Date()
// console.log(typeof(myDate))
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())

let myTimestamp = Date.now()
// console.log(myTimestamp)
//console.log(Math.floor(myTimestamp/1000))


myDate.toLocaleString('default',{
  day:"numeric",
  dateStyle:"long"
})
console.log(myDate)