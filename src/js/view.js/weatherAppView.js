import AppView from "./appView.js";

class WeatherAppView extends AppView {
  constructor() {
    super();
    this._setDate();
  }

  _setDate() {
    return setInterval(() => {
      return (document.querySelector(".date").textContent =
        new Intl.DateTimeFormat("en-GB", {
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

  _generateMarkup(data) {
    console.log(data.daily);

    const markUp = `
    <!-- left -->
    <section class="grid__left">
      <figure class="grid__left-weather-logo">
        <img src="https://openweathermap.org/img/wn/${data.weather.icon}@2x.png" class="img__left img-responsive" alt="">
      </figure>
      <h3 class="grid__left-weather-type">${data.weather.main}</h3>
      <h4 class="grid__left-weather-cityName city-text">${data.city}</h4>
      <h2 class="grid__left-weather-temp">${data.current.temp}&#8451;</h2>
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
    <!-- right -->
    <section class="grid__right">
      <div class="grid__right-weather">
        <svg class="grid__right-weather-logo">
          <use href="./src/images/icons/humidity.svg#humidity"></use>
        </svg>
        <div class="grid__right-weather-info">
          <h4 class="grid__right-weather-info-title">Humidity</h4>
          <h3 class="grid__right-weather-info-">${data.current.humidity}%</h3>
        </div>
      </div>
      <div class="grid__right-weather">
        <svg class="grid__right-weather-logo">
          <use href="./src/images/icons/airPressure.svg#airPressure"></use>
        </svg>
        <div class="grid__right-weather-info">
          <h4 class="grid__right-weather-info-title">Air Pressure</h4>
          <h3 class="grid__right-weather-info-">${data.current.airPressure}PS</h3>
        </div>
      </div>
      <div class="grid__right-weather">
        <svg class="grid__right-weather-logo">
          <use href="./src/images/icons/chanceOfRain.svg#chanceOfRain"></use>
        </svg>
        <div class="grid__right-weather-info">
          <h4 class="grid__right-weather-info-title">Chance of Rain</h4>
          <h3 class="grid__right-weather-info-">0%</h3>
        </div>
      </div>
      <div class="grid__right-weather">
        <svg class="grid__right-weather-logo">
          <use href="./src/images/icons/wind.svg#wind"></use>
        </svg>
        <div class="grid__right-weather-info">
          <h4 class="grid__right-weather-info-title">Wind Speed</h4>
          <h3 class="grid__right-weather-info-">${data.wind}km/h</h3>
        </div>
      </div>
    </section>
    <!-- bottom -->
    <section class="grid__bottom">
      <h4 class="grid__bottom-date date">${this._date}</h4>
      <div class="Weather-Cards">
        ${data.daily}
      </div>
      <div class="cards__btns">
        <button class="btn btn__left"><</button>
        <button class="btn btn__right">></button>
      </div>
    </section>
    `;
    this._clear();
    this._overlay();

    this._parent.insertAdjacentHTML("afterbegin", markUp);
  }
}

export default new WeatherAppView();
