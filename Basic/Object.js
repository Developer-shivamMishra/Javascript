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

// console.log(user.greeting())
// console.log(user.greetingOne())


///////////PART 2

tinderuser.id = '134abc'
tinderuser.name = 'sammy'
//console.log(tinderuser)


//Nested Object
const regulerUser = {                
    email:'sm22er@gamil.com',
    full_Name:{
        userfullName:{
            first_Name :'Shivam',
            last_Name : 'Mishra'
        }
    }
}

//console.log(regulerUser.full_Name.userfullName)

//Merge
const obj1 = {1:'a' , 2:'b'}
const obj2 = {3:'a' , 4:'b'}

//const obj3 = Object.assign({},obj1,obj2)
//const obj3 = {...obj1, ...obj2}               //Spread operator

// console.log(Object.keys(obj1))
// console.log(Object.values(obj2))
// console.log(Object.entries(obj2))
// console.log(regulerUser.hasOwnProperty('email'))


////////////////////////////        PART 3
  //Distructor
const Course  = {
    CourseName : 'Javascript',
    Price : '10000',
    CourceInstructor : 'Michal'
}

// console.log(Course.CourceInstructor)

const{CourseName} = Course
console.log(CourseName)

