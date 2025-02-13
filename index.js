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
      //Відмальовуємо погоду
      displayWeather(data)
    
    });
}

/*
<article class="weather">
        <p>City name: Kyiv</p>
        <p>Temperature: 7℃</p>
        <p>Weather description: overcast cloud</p>
      </article>

*/

function displayWeather(weatherObject){
  const{name,main:{temp},weather:[{description}]}=weatherObject

  //Створюємо article
  const article = document.createElement('article')
  article.classList.add('weather')

  //Створюємо параграф з назвою міста
  const cityName = document.createElement('p')
  cityName.append(`City name:${name}`)

  //Створюємо параграф з температурою
  const temperature = document.createElement('p')
  temperature.append(`Temperature: ${temp}℃`)

  //Створюємо параграф  з описом погоди
  const descriptionWeather = document.createElement('p')
  descriptionWeather.append(`Weather description: ${description}`)

  //До article чіпляємо параграфи, які були створені
  article.append(cityName,temperature,descriptionWeather)

  //До section чіпляємо article
  const section = document.querySelector('.wrapper')
  section.append(article);


}
