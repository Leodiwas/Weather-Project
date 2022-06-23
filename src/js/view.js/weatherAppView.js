import AppView from "./appView.js";

class WeatherAppView extends AppView {
  constructor() {
    super();
  }

  _generateMarkup(data) {
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
      <button class="btn btn-text grid__bottom-weekday">< Friday</button>
      <div class="Weather-Cards">
        <article class="Cards">
          <h5 class="time">3AM</h5>
          <h2>28&#8451;</h2>
          <h6 class="feedback">
            Feels likes 30&#8451;</span>
          </h6>
        </article>
        <article class="Cards">
          <h5 class="time">4AM</h5>
          <h2>30&#8451;</h2>
          <h6 class="feedback">
            Feels likes 30&#8451;</span>
          </h6>
        </article>
        <article class="Cards">
          <h5 class="time">5AM</h5>
          <h2>38&#8451;</h2>
          <h6 class="feedback">
            Feels likes 30&#8451;</span>
          </h6>
        </article>
        <article class="Cards">
          <h5 class="time">6AM</h5>
          <h2>40&#8451;</h2>
          <h6 class="feedback">
            Feels likes 30&#8451;</span>
          </h6>
        </article>
        <article class="Cards">
          <h5 class="time">7AM</h5>
          <h2>-28&#8451;</h2>
          <h6 class="feedback">
            Feels likes 10&#8451;</span>
          </h6>
        </article>
        <article class="Cards">
          <h5 class="time">8AM</h5>
          <h2>32&#8451;</h2>
          <h6 class="feedback">
            Feels likes 30&#8451;</span>
          </h6>
        </article>
        <article class="Cards">
          <h5 class="time">9AM</h5>
          <h2>20&#8451;</h2>
          <h6 class="feedback">
            Feels likes 30&#8451;</span>
          </h6>
        </article>
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
