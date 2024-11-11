//************************OBJECT********************* */

     const tinderuser = new Object()  //singlten object
     const tinderuser1 = {}   //None singlten object
//    Object.create
const mySym = Symbol('key1')


const user = {
    name:'Shivam',
    age : 21,
    [mySym] : 'mykey1', //symbol
    'full_Name' : 'Shivam Mishra',
    location: 'MP',
    email: 'shivam@gmail.com',
    isloggedin:false
}

// console.log(user.email)//1st way
// console.log(user['email']) //2nd way
// console.log(user['full_Name']) 
// console.log(typeof user[mySym]) 

user.age = 22;
// Object.freeze(user)  //freeze
// console.log(user)

user.greeting = function(){
    console.log('Hello js user')
}
user.greetingOne = function(){
    console.log(`Hello js user,${this.name}`)

}

console.log(user.greeting())
console.log(user.greetingOne())


///////////PART 2

