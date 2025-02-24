"use strict";

/*
https://api.openweathermap.org/data/2.5/weather?q=Zaporizhzhia&appid=f7c576ba3699bdd0b98ddcf196639992&units=metric

f7c576ba3699bdd0b98ddcf196639992

Задача
Зробити погодний віджет
Алгоритм вирішення:
- Зробити верстку елементів, які отримують від користувача дані про місто
- Отримати дані з API і обробити їх (підготувати дані для відмалювання у вертці)
- Зробити карту з погодою і відобразити її
*/

const API_KEY = "f7c576ba3699bdd0b98ddcf196639992";
const API_BASE = "https://api.openweathermap.org/data/2.5/weather";

const btn = document.querySelector(".btn");

btn.addEventListener("click", buttonClickHandler);

function buttonClickHandler({ target }) {
  const selectValue = target.previousElementSibling.value;
  console.log(selectValue);
  requestApi(selectValue);
}

function requestApi(cityName) {
  //Готуємо url
  const url = `${API_BASE}?q=${cityName}&appid=${API_KEY}&units=metric`;
  console.log(url);

  //Робимо запит
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      //Відмальовуємо погоду
      displayWeather(data)
    
    });
}


function displayWeather(weatherObject){
  const{name,main:{temp},weather:[{description}]}=weatherObject

  const article = document.querySelector('#weather-box');
  article.classList.add('weather-display');

  const city = document.querySelector('#city');
  city.textContent= name;

  const temperature = document.querySelector('#temp');
  temperature.textContent= `${temp} ℃`;

  const descrip = document.querySelector('#description');
  descrip.textContent = description;



}
