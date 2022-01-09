// Category Active
let firstLi = document.querySelector('.first-li');
let katDeactive = document.querySelector('.kategory-deactive');
let katActive = document.querySelector('.kategory-active');

firstLi.addEventListener('mouseenter', ()=> {
    katDeactive.style.display = "block";
    
})

firstLi.addEventListener('mouseleave', ()=> {
    katDeactive.style.display = "none";
    
})

katDeactive.addEventListener('mouseenter', ()=> {
    katDeactive.style.display = "block";
    
})

katDeactive.addEventListener('mouseleave', ()=> {
    katDeactive.style.display = "none";
    
})

// Boshqa Sahifalar Active
let boshqaSahifa = document.querySelector('.fourth-li');
let boshqaDeactive = document.querySelector('.boshqa-deactive');

boshqaSahifa.addEventListener('mouseenter', ()=> {
    boshqaDeactive.style.display = "flex";
})

boshqaSahifa.addEventListener('mouseleave', ()=> {
    boshqaDeactive.style.display = "none";
})

boshqaDeactive.addEventListener('mouseenter', ()=> {
    boshqaDeactive.style.display = "flex";
})

boshqaDeactive.addEventListener('mouseleave', ()=> {
    boshqaDeactive.style.display = "none";
})


// Savat Active
let shopCard = document.querySelector('.sixth-li');
let savatDeactive = document.querySelector('.savat-deactive');

shopCard.addEventListener('mouseenter', ()=> {
    savatDeactive.style.display = "block";
})

shopCard.addEventListener('mouseleave', ()=> {
    savatDeactive.style.display = "none";
})

savatDeactive.addEventListener('mouseenter', ()=> {
    savatDeactive.style.display = "block";
})

savatDeactive.addEventListener('mouseleave', ()=> {
    savatDeactive.style.display = "none";
})


// Kirish Active
let kirish = document.querySelector('.ruyxat-div-1');
let kirishDea = document.querySelector('.kirish-deactive');
let kirishBAck = document.querySelector('.kirish-background');

kirish.addEventListener('click', ()=> {
    kirishDea.classList.toggle('kirish-active');
     kirishBAck.style.display = "block";
})


// Kirish X
let x = document.querySelector('.x');


x.addEventListener('click', ()=> {
    kirishDea.classList.add('kirish-deactive');
    kirishDea.classList.remove('kirish-active');
    kirishBAck.style.display = "none";
})
 

//Ruyxatdan Utish Active 
let ruyxatUtish = document.querySelector('.ruyxat-div-2');
let ruyxatActive2 = document.querySelector('.ruyxatdan-utish-2');

ruyxatUtish.addEventListener('click', ()=>  {
    ruyxatActive2.classList.toggle('ruyxat-active');
    kirishBAck.style.display = "block";
})


// Ruyxat X
let xSec = document.querySelector('.x-2');

xSec.addEventListener('click', ()=> {
    ruyxatActive2.classList.add('ruyxatdan-utish-2');
    ruyxatActive2.classList.remove('ruyxat-active');
    kirishBAck.style.display = "none";
})
