"use strict";

fetch("./user.json")
  .then((response) => {
    return response.json(); // перетворюємо 0 і 1 на js об'єкт
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error)=>{
    console.log(error);
  })
  .finally(()=>{
    console.log('finally quastion closed')
  });
//----------------------------------------------------


  fetch("https://api.monobank.ua/bank/currency")
  .then((response) => {
    return response.json(); 
  })
  .then((data) => {
    console.log(data);
  });
