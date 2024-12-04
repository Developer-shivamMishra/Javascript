const title =document.getElementById('first')
title
title.style.color = 'blue'
'blue'
title.style.margin = '4px'
'4px'
title.style.border = '3px'
'3px'
title.style.border = '3px solid white'
'3px solid red'

// querySelector

// let myul = document.querySelector('ul');
// myul.querySelector('li')
// let turnred=myul.querySelector('li')
// turnred.style.backgroundColor = 'red'

// querySelectorAll
// let templi = document.querySelectorAll('li')
// templi[1].style.color = 'aqua'


// let head = document.querySelectorAll('h1')
//   head.forEach( (bg)=>{
//     bg.style.padding = '2px 0 0 9px'})


//className

let tempclass = document.querySelectorAll('list-item')

Array.from(tempclass);  //converting htmlcollection to array

let myconvertArray = Array.from(tempclass); 
myconvertArray.forEach( (li) =>{
    li.style.color = 'red';
})