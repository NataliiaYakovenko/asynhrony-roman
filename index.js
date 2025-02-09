"use strict";

const user = {
  firstName: "Nataliia",
  lastName: "Yakovenko",
  age: 41,
  footSize: 36,
  adress:{
    street:'D.Vishneveckiy',
    numberHouse: 36,
    flate: 30
  },
  sayHello: function(){ //в JSON функція не потрапить, вона будить ігноруватися

    console.log('hello');
  }
};
//JSON це позначення об'єктів JS,для перекладання даних в JSON, 
 //щоб ці дані можна було прочитати на інших мовах програмування

// метод stringify() - перетворює об'єкт JS в JSON
//Серіалізація - це процес перетворення JS об'єктів або даних в JSON


//метод parse() - перетворює об'єкт JSON в об'єкт JS 
//Десеріалізація - це процес перетворення JSON об'єктів або даних в JS об'єкт

console.log(user);
const jsonString = JSON.stringify(user)  //перетворюємо об'єкт JS в JSON
console.log(jsonString);

const jsonParse = JSON.parse(jsonString) //перетворюєм об'єкт JSON в об'єкт JS 
console.log(jsonParse);
//---------------------------------------------------------------

/*Поверхнева копія об'єкту (shallow copy) - це копія, де копіюються тільки посилання на елементи,
а не самі значення
*/

const originalObjact = {
  users:[
    {
      firstName: 'Nataliia',
      age: 41,
    },
    {
      firstName: 'Roland',
      age: 27,
    }
  ]
}
//ми можемо використати spred оператор (...)
const shallowCopy = {...originalObjact} //цей підхід дозволяє нам зробити новий об'єкт

console.log(originalObjact);
console.log(shallowCopy);
console.log(originalObjact.users[0].firstName ="Nataliia jan");
console.log(shallowCopy);
//----------------------------------------------------------------------------

//Глибока копія (deep copy) - це створення повноцінної копії об'єкта,де копіюються посилання
 //на його елементи і самі значення.
 //Тоєсть при внесенні будь-яких змін в один об'єкт, копія об'єкту залишиться не змінною 

 const deepCopy = JSON.parse(JSON.stringify(originalObjact));
 console.log(deepCopy);
console.log(originalObjact.users[1].firstName ="Roland jan");
console.log(originalObjact);
console.log(deepCopy);
console.log(deepCopy.users[0].age=42);
console.log(deepCopy);
console.log(originalObjact);