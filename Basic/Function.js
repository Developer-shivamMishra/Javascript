/////////////////*******************************FUNCTION*********************************** */

function addTwoNumber(num1,num2){           //Function  Definition = Parameters
    return (num1+num2)
    
    console.log('Jon') // Never Printed Because After retrun Keyword NOthing stmt worked
}
const result = addTwoNumber(3,5)       //Function Call = Arguments
//console.log(result)


///////////////////////////////////////////////////
function LoginUserMessege(userName = 'sam'){
    if (!userName) {
        console.log('Please Enter the Username')
        return
    }
    return `${userName} just logged in`
}
//console.log(LoginUserMessege('Shivam'))
console.log(LoginUserMessege())

////////////////

function CaculateCartprice(...num1){                  //rest operator
    return num1
}
console.log(CaculateCartprice(433,545,343))

///////
function CaculateCartprice1(val1,val2,...num1){                  //rest operator
    return num1
}
console.log(CaculateCartprice1(433,545,343,543))


////Passing Object

const user={
    userName:'Shivam',
    price : 232
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`)
}
handleObject(user)

////Passing Array

const mynewarray = [3,5,3,66,34]

function returnSecond(getArray){
    console.log(`${getArray[0]}`)
}
returnSecond(mynewarray)


