"use strict";

const promise = new Promise(executor); // стан pending

function executor(resolve, reject) {
  //задача: згенерувати випадкове ціле число в діапазоні від 0 до 15
  const number = Math.floor(Math.random() * 15);
  //якщо число кратне 2, ми резолвемо promise та повертаємо це число
  //якщо число не кратне 2, реджектимо promise та повертаємо помилку
  if (number % 2 === 0) {
    resolve(number); // стан fulfilld
  } else {
    const err = new RangeError(`Error happened: ${number}`);
    reject(err);  // стан reject
  }
}

promise.then(
  (number) => {
    console.log(number);
  },
  (error) => {
    console.log(error);
  }
);
