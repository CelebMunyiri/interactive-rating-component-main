'use strict'
let btn=document.querySelector('.btn')
let rated=document.querySelector('.rated')
let submit=document.querySelector('.submit')
let thankyouBox=document.querySelector('.thankyouBox')
let hidden =document.querySelector('.hidden')
let btn2=document.querySelector('.btn2')
let btn3=document.querySelector('.btn3')
let btn4=document.querySelector('.btn4')
let btn5=document.querySelector('.btn5')
let box =document.querySelector('.box')
submit.addEventListener('click',function(){
thankyouBox.classList.toggle('hidden')
// console.log('cliked');
box.classList.add('hidden')
})

btn.addEventListener('click',function(){
    rated.textContent='1' 
})

btn2.addEventListener('click',function(){
    rated.textContent='2' 
})

btn3.addEventListener('click',function(){
    rated.textContent='3' 
})

btn4.addEventListener('click',function(){
    rated.textContent='4' 
})

btn5.addEventListener('click',function(){
    rated.textContent='5' 
})

document.addEventListener('keydown',(e)=>{
    if(e==='ENTER'){
        box.classList.remove('hidden')
        console.log('here iam')
    }
})