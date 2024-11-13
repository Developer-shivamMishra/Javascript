//*************************ARRAY********************* */

const newArray = new Array(3,32,4,2,4,6)
//console.log(newArray)

//ARRAY METHOD
// newArray.push(5)
// newArray.pop()
// newArray.unshift(9)
// newArray.shift()
// console.log(newArray.includes(5))
// console.log(newArray.indexOf(9))

const myArray = newArray.join()
// console.log(newArray)
// console.log(myArray)   //type --string

//slice and splice

const myn1 = newArray.slice(2,5)
//console.log(myn1)

const myn2 = newArray.splice(2,5)
//console.log(myn2)


const marvel_heroes = ['thor','ironman','hulk']
const dc_heroes = ['superman','batman','flash']

//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes)

//const all_heroes= marvel_heroes.concat(dc_heroes)
const all_heroes= [...marvel_heroes,...dc_heroes]    //spread operator
//console.log(all_heroes)


const another_Array = [3,4,2,[5,7,9,33],6,3,7,3,[5,7,4]]
const real_another_array = another_Array.flat(3)
console.log(real_another_array)


console.log(Array.isArray('shivam'))
console.log(Array.from('shivam'))
console.log(Array.from({name:'shivam'}))  //intresting

const score = 100;
const score1 =200;
const score2 =300;

console.log(Array.of(score,score1,score2));  //convert to ARRAY



