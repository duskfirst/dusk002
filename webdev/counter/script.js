const maindiv = document.querySelector('.main');
let h1 = document.querySelector('h1');

let newelement = document.createElement('div');

const Previous = document.querySelector('#pre');
const Reset = document.querySelector('#re');
const Next = document.querySelector('#ne');

let x = 0;
heading.textContent(x);


pre.addEventListener('click', ()=>{
    x -= 1;
    h1.textContent(x);
})
pre.addEventListener('click', ()=>{
    x += 1;
    h1.textContent(x);
    
})
pre.addEventListener('click', ()=>{
    x = 0;
    h1.textContent(x);
})

x = Event.querySelector('h1');

maindiv.append(newelement);