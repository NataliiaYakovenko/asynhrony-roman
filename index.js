"use strict";

const p = new Promise(executer);  //pending

function executer(resolve, reject) {
  setTimeout(() => {
    resolve("It is time");  //fulfilled
  }, 15000);
}
const h1 = document.querySelector('#root')

p.then((string)=>{
  h1.append(string)
})