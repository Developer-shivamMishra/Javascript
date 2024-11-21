/////////////////////////////////////////
if (2 == "2") {
  //TRUE
  //console.log("yes")
} else if (3 === "5") {
  // FALSE
  // console.log(`No that's not true`)
}

/////////////
const score = 300;
if (score > 200) {
  const power = "Fly";
  //console.log(`you can ${power}`)
}

///////////////

const userLoggedin = true;
const debitCard = true;
if (userLoggedin && debitCard) {
  //console.log(`Allow to buy cources`)
}

const loogedinfromGoogle = false;
const loogedinfromEmail = true;
if (loogedinfromEmail || loogedinfromGoogle) {
  // console.log(`User logged in`)
}

//////

// Falsy value = false,0,-0,BigInt 0n,"",null,undefined,NaN
// Truthy value = 1,true,"0",'false'," ",[],{},function(){},

// const userrEmail = 'shivam@ai'
const userrEmail = "";
if (userrEmail) {
  //console.log("Got user Email")
} else {
  //console.log("Dont have user Email")
}

/////////////////
// console.log(false == 0)
// console.log(false == '')
// console.log(0 == '')

///Nulish Coalescing Operator (??): Null Undefined

let val;
//val = 3 ?? 50
// val = null ?? 20
//val = undefined ?? 20
val = undefined ?? 20 ?? 55;
//console.log(val)

//*******************LOOPS ******************* */

for (let i = 0; i < 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("The value is =  5")
  }
  //console.log(element)
}

///
for (let i = 1; i <= 10; i++) {
  //console.log(`outer value : ${i}`)
  for (let j = 1; j <= 10; j++) {
    //console.log(`inner value:${j} and inner value: ${i}`)
    //console.log(`${i}*${j}=${i*j}`)
  }
}

////
let myArray = ["flash", "superman", "batman"];
//console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  // console.log(element)
}

////// ************Break and Continue*******************//
for (let index = 0; index <= 20; index++) {
  if (index == 6) {
    //console.log('detected 5');
    //break;
  }
  //console.log(`value of i : ${index}`)
}

for (let index = 0; index <= 20; index++) {
  if (index == 5) {
    //console.log('detected 5');
    continue;
  }
  //console.log(`value of i : ${index}`)
}

let myArray1 = ["batman", "ironman", "thor"];
let arr = 0;
while (arr < myArray.length) {
  // console.log(`value is ${myArray[arr]}`)
  arr++;
}

///////////***************Special Loop*************** */

/////For of loop -- A for...of loop operates on the values sourced from an iterable one by one in sequential order.

const arr1 = [2, 4, 5, 6, 7];
for (const val of arr1) {
  //console.log(val);
}

const myObj = {
  game1: "PUBG",
  game2: "COD",
};
// for (const [key , value] of object) {
//     console.log(key, ':-',value);

// }

/////////For Object for..in
const myObj1 = {
  js: "javascript",
  cpp: "c++",
  java: "java",
};
for (const key in myObj1) {
  // console.log(`${key} shortcut is for ${myObj1[key]}`);
}

//////////////for Array for..in
const programming = ["java", "c", "cpp"];
for (const key in programming) {
  //console.log(programming[key]);
}

///////***************For Each Loop************************* */

const Coding = ["java", "c", "cpp", "Python"];

Coding.forEach((element, index, Coding) => {
  // console.log(element,index,Coding);
});

const myCoding = [
  {
    language: "Javascript",
    lanaguageFile: "js",
  },
  {
    language: "Java",
    lanaguageFile: "java",
  },
  {
    language: "python",
    lanaguageFile: "py",
  },
];
myCoding.forEach((item) => {
  //console.log(item.lanaguageFile);
});
