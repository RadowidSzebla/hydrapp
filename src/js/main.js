"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below
let key = 'glassCount_' + new Date().toISOString().slice(0,10);
//console.log(`Hello world!`);
const glassCounter = document.querySelector('.glass__counter--js');
if (localStorage.getItem(key))
{
  glassCounter.textContent = localStorage.getItem(key);
}
let counterValue = glassCounter.textContent;
console.log(counterValue);

const buttonAdd = document.querySelector('.button__add--js');
function handleClickAdd(){
  if (counterValue<10)
  {
    counterValue++;
    glassCounter.textContent = counterValue;
  }
  localStorage.setItem(key,counterValue);
}
buttonAdd.addEventListener('click',handleClickAdd);

const buttonRemove = document.querySelector('.button__remove--js')
function handleClickRemove(){
  if (counterValue>0)
  {
    counterValue--;
    glassCounter.textContent = counterValue;
  }
  localStorage.setItem(key,counterValue);
}
buttonRemove.addEventListener('click',handleClickRemove);