'use strict'

/*
Event loop - це механізм, який керує виконанням коду

Концептуально, ідея Event loop полягає в тому,
щоб не заблокувати основний потік даних.

Технічно, ця концепція реалізується через Coogle Chrome,
який написан на програмі С++

*/
//setTimeout() // це визов функції або виконання фрагменту після затримки
/*
Алгоритм setTimeout():
1. Завантажується сторінка
2. Реєструємо Timeout
3. Після того, як пройде затримка - запускаємо якусь функцію
setTimeout() приймає функцію і затримку
*/

function fun(){
     //console.log(2+2);
}
const timeoutID = setTimeout(fun,2000);
clearTimeout(timeoutID) // - видалення Timeout

// let calculation = 1;
// for(let i = 0; i <1000000000; i++){
// calculation *=5;
// }
// console.log(calculation);

//setTimeout(function(){console.log('loggin');},3000)