'use strict'

/*
Event loop - це механізм, який керує виконанням коду

Концептуально, ідея Event loop полягає в тому,
щоб не заблокувати основний потік даних.

Технічно, ця концепція реалізується через Coogle Chrome,
який написан на програмі С++

*/
const btn = document.querySelector('#btn');

btn.addEventListener('click',clickHandler);
function clickHandler(event){
     console.log('BUTTON');
}

