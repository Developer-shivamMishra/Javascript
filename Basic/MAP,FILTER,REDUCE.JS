///////***********Filter***///////////////
const mynums = [1, 2, 3, 4, 5, 6, 7, 8];

const newnums = mynums.filter((num) => {
  //Filter way
  return num >= 4;
});
//console.log(newnums);

// const myNewarray = []     ///For each Way
// mynums.forEach( (num)=>{
//     if (num >= 4) {
//         myNewarray.push(num)
//     }
// })
// console.log(myNewarray)

////***EXMPLE FOR FILTER */

const Books = [
  { title: "Book one", Genre: "Histroy", Publish: 1998 },
  { title: "Book 1", Genre: "Histroy", Publish: 1898 },
  { title: "Book two", Genre: "Econamics", Publish: 1798 },
  { title: "Book three", Genre: "English", Publish: 1998 },
  { title: "Book four", Genre: "Science", Publish: 1955 },
  { title: "Book five", Genre: "Math", Publish: 1965 },
];

// const userBooks = Books.filter( (Bk)=>{
//      return Bk.Genre === 'Histroy'
// })
// const userBooks = Books.filter( (Bk)=>{
//      return Bk.Publish > 1900
// })
const userBooks = Books.filter((Bk) => {
  return Bk.Publish > 1900 && Bk.Genre === "Histroy";
});

//console.log(userBooks);

/////****************Map************** */

const Numbers = [2, 3, 4, 5, 6, 7, 6];
// const newnums1=  Numbers.map( (num) =>{
//     return num+10
// })

const newnums1 = Numbers.map((num) => num + 10)
  .map((num) => num * 2)
  .filter((num) => num > 30);

//console.log(newnums1);

////************Reduce************ */

const mynums3 = [1, 2, 3, 4];
const mytotal = mynums3.reduce((acc, currval) => {
  //console.log(`acc : ${acc} and currentvalue : ${currval}`);

  return acc + currval;
}, 0);

//console.log(mytotal);

////
const Mycart = [
    {coures:"full satack" , price : 2343},
    {coures:"js dev" , price : 343},
    {coures:"data science" , price : 2643},
    {coures:"web dev" , price : 5343},
]

const cartTopay = Mycart.reduce( (acc,item)=>{
    return acc+item.price
},0)

console.log(cartTopay);
