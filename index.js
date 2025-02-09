"use strict";

const user = {
  firstName: "Nataliia",
  lastName: "Yakovenko",
  age: 41,
  footSize: 36,
};
//JSON це позначення об'єктів JS,для перекладання даних в JSON, 
 //щоб ці дані можна було прочитати на інших мовах програмування

// метод stringify() - перетворює об'єкт JS в JSON

//метод parse() - перетворює об'єкт JSON в об'єкт JS 
console.log(user);
const jsonString = JSON.stringify(user)  //перетворюємо об'єкт JS в JSON
console.log(jsonString);

const jsonParse = JSON.parse(jsonString) //перетворюєм об'єкт JSON в об'єкт JS 
console.log(jsonParse);