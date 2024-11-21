/////////////////*******************************FUNCTION*********************************** */

function addTwoNumber(num1, num2) {
  //Function  Definition = Parameters
  return num1 + num2;

  console.log("Jon"); // Never Printed Because After retrun Keyword NOthing stmt worked
}
const result = addTwoNumber(3, 5); //Function Call = Arguments
//console.log(result)

///////////////////////////////////////////////////
function LoginUserMessege(userName = "sam") {
  if (!userName) {
    console.log("Please Enter the Username");
    return;
  }
  return `${userName} just logged in`;
}
//console.log(LoginUserMessege('Shivam'))
// console.log(LoginUserMessege())

////////////////

function CaculateCartprice(...num1) {
  //rest operator
  return num1;
}
//console.log(CaculateCartprice(433,545,343))

///////
function CaculateCartprice1(val1, val2, ...num1) {
  //rest operator
  return num1;
}
//console.log(CaculateCartprice1(433,545,343,543))

////Passing Object

const user = {
  userName: "Shivam",
  price: 232,
};

function handleObject(anyObject) {
  //console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`)
}
handleObject(user);

////Passing Array

const mynewarray = [3, 5, 3, 66, 34];

function returnSecond(getArray) {
  //console.log(`${getArray[0]}`)
}
returnSecond(mynewarray);

///***********************SCOPE******************* */

function one() {
  const username = "Shivam";
  function two() {
    const website = "youtube";
    //console.log(username);
  }
  // console.log(website)
  two();
}
one();

//*************Intrseting*************** */

function addone(num) {
  //1ST WAY
  return num + 1;
}
addone();

const addtwo = function addtwo(num) {
  //2ND WAY
  return num + 2;
};
addtwo();



//////******************ARROW FUNCTION************** */

const user1 = {
  username : "Shivam",
  price : 999,

  welcomemessege: function(){
       console.log(`${this.username} , welcome to website`)
       console.log(this)
  }

}
// user1.welcomemessege()
// user1.username = "Jon"
// user1.welcomemessege()

// console.log(this)


///////////////
 const Arrow = ()=>{
  console.log(this)
 }
Arrow()


// const addTwo  = (num1,num2)=>{           //1st way
//   return num1+num2
// }

// const addTwo = (num1,num2)=> (num1+num2)    //2nd way

const addTwo = (num1,num2)=> ({username:'shivam'})   //Object Return


console.log(addTwo(4,3))




