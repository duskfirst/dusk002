const maindiv = document.querySelector('.main');

let x = 1;
let y = 1;

let outsidediv;
let insidediv;

for (x =1; x <= 200; x++)
{
    outsidediv = document.createElement('div');
    outsidediv.classList.add('outside');
    for (y = 1; y <= 200; y++)
    {
        insidediv = document.createElement('div');
        insidediv.classList.add('inside');
        outsidediv.append(insidediv);
    }
    maindiv.append(outsidediv);
}

let insidedivs = document.querySelectorAll('.inside');

insidedivs.forEach((div)=>{
    div.addEventListener('mouseover', ()=>{
        div.classList.add('hovered');
    })
})




















/*const maindiv = document.querySelector('.main');

let newelement = document.createElement('div');
let removeElement;

const btn = document.querySelectorAll('.btn');
const btn2 = document.querySelector('#btn2');

btn.forEach((button)=>{
    
    button.addEventListener('click', () =>{
        newelement = document.createElement('div');
        newelement.classList.add('first');
        newelement.textContent=('Hi!');
        maindiv.append(newelement);
    })
})  
newelement.setAttribute('style',  'background-color: blue');

btn2.addEventListener('click', ()=>{
    removeElement = document.querySelector('.first');

    maindiv.removeChild(removeElement);
})
*/






    
