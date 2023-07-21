'use strict'
let btn=document.querySelector('.btn')
let rated=document.querySelector('.rated')
let submit=document.querySelector('.submit')
let thankyouBox=document.querySelector('.thankyouBox')
let hidden =document.querySelector('.hidden')



submit.addEventListener('click',function(){
thankyouBox.classList.toggle('hidden')
console.log('cliked');
})

btn.addEventListener('click',function(){
    rated.textContent='1'
    console.log('1')
})