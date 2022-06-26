import AppView from "./appView.js";
import { day } from "../model.js";

class WeatherAppView extends AppView {
  _date = document.querySelector(".date");

  constructor() {
    super();
    this._setDate();
  }

  _setDate() {
    return setInterval(() => {
      return (this._date.textContent = new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        weekday: "short",
        second: "numeric",
      }).format(new Date()));
    }, 1000);
  }

  _generateCardMarkup(data) {
    return data.daily.forEach((el, i) => {
      let markUP;
      if (i <= 6) {
        markUP = `
      <article class="Cards">
        <h4 class="weekday">${day[i]}</h4>
        <figure class="grid__left-weather-logo">
         <img src="https://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png" class="img__left img-responsive" alt="">
        </figure>
        <h3>${el.weather[0].main}</h3>
      </article>`;
      }

      this._cards.insertAdjacentHTML("beforeend", markUP);
    });
  }

  _generateMarkup(data, data2) {
    const markUp = `
    <section class="grid__up__left">
          <figure class="grid__up__left-weather-logo">
            <img src="https://openweathermap.org/img/wn/${data.weather.icon}@2x.png" class="img__left img-responsive" alt="">
          </figure>
          <h3 class="grid__up__left-weather-type">${data.weather.main}</h3>
          <h4 class="grid__up__left-weather-cityName city-text">${data.city}</h4>
          <h2 class="grid__up__left-weather-temp">${data.current.temp}&#8451;</h2>
          <button class="btn location__btn">
            <svg>
              <use href="./src/images/icons/location.svg#location"></use>
            </svg>
            <h5>Change Location</h5>
          </button>
          <div class="search__Box">
            <svg class="search__svg">
              <use href="./src/images/icons/searchh.svg#search"></use>
            </svg>
            <input
              type="text"
              class="search__input"
              placeholder="Enter Location"
              required
            />
          </div>
        </section>
        <section class="grid__up__right">
          <div class="grid__up__right-weather">
            <svg class="grid__up__right-weather-logo">
              <use href="./src/images/icons/humidity.svg#humidity"></use>
            </svg>
            <div class="grid__up__right-weather-info">
              <h4 class="grid__up__right-weather-info-title">Humidity</h4>
              <h3 class="grid__up__right-weather-info-">${data.current.humidity}%</h3>
            </div>
          </div>
          <div class="grid__up__right-weather">
            <svg class="grid__up__right-weather-logo">
              <use href="./src/images/icons/airPressure.svg#airPressure"></use>
            </svg>
            <div class="grid__up__right-weather-info">
              <h4 class="grid__up__right-weather-info-title">Air Pressure</h4>
              <h3 class="grid__up__right-weather-info-">${data.current.airPressure} PS</h3>
            </div>
          </div>
          <div class="grid__up__right-weather">
            <svg class="grid__up__right-weather-logo">
              <use href="./src/images/icons/chanceOfRain.svg#chanceOfRain"></use>
            </svg>
            <div class="grid__up__right-weather-info">
              <h4 class="grid__up__right-weather-info-title">Chance of Rain</h4>
              <h3 class="grid__up__right-weather-info-">0%</h3>
            </div>
          </div>
          <div class="grid__up__right-weather">
            <svg class="grid__up__right-weather-logo">
              <use href="./src/images/icons/wind.svg#wind"></use>
            </svg>
            <div class="grid__up__right-weather-info">
              <h4 class="grid__up__right-weather-info-title">Wind Speed</h4>
              <h3 class="grid__up__right-weather-info-">${data.wind} km/h</h3>
            </div>
          </div>
        </section>

    `;
    this._clear();
    this._overlay();
    this._gridUp.insertAdjacentHTML("afterbegin", markUp);
  }
}

export default new WeatherAppView();
