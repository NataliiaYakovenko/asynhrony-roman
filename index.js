"use strict";

function loadImage(src) {
  //1. Створюємо саму картинку
  const img = document.createElement("img");
  img.setAttribute("src", src);

  //2. Створюємо елемент у верстці, який буде слугувати нам для того,
  // щоб вказувати, чи завантажуємо ми щось чи ні
  const h2 = document.createElement('h2');
  h2.id = 'loading-h2';
  h2.append('loading image......')
  document.body.append(h2);

  //3. Повертаємо promise
  //Промісифікаці - коли ми огортаємо якийсь асинхронний код в promise
  //для забезпечення собі зручну роботу
  return new Promise((resolve, regect) => {
    //Підписуємо створену картинку на подію load
    //якщо картинка завантажиться - ми resolve promise з елементом картинки
    img.addEventListener("load", () => {
      resolve(img);
    });

    //Підписуємо створену картинку на подію error
    //якщо картинка не завантажиться - ми regect promise з повідомленням про помилку
    img.addEventListener("error", () => {
      regect("Image can`t be loaded");
    });
  });
}

loadImage(
  'https://www.akc.org/wp-content/uploads/2018/05/Three-Australian-Shepherd-puppies-sitting-in-a-field.jpg')
  .then((img)=>{
    document.body.append(img);
  },(errorMessage)=>{
    const h2 = document.createElement('h2');
    h2.append(errorMessage);
    document.body.append(h2);
  })
  .finally(()=>{
    const loadingH2 = document.querySelector('#loading-h2')
    loadingH2.remove();

  })

