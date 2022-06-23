import AppView from "./view.js/appView.js";
import weatherAppView from "./view.js/weatherAppView.js";

export const state = {
  city: "",
  current: {
    temp: "",
    humidity: "",
    airPressure: "",
  },
  weather: {
    icon: "",
    main: "",
  },
  wind: "",
  daily: { icon: [], main: [] },
};

export const weatherState = (cityData, countryData) => {
  console.log(cityData, countryData);

  const { name } = cityData;
  state.city = name;

  const { temp, humidity, pressure } = cityData.main;
  state.current.temp = temp;
  state.current.humidity = humidity;
  state.current.airPressure = pressure;

  const { icon, main } = cityData.weather[0];
  state.weather.icon = icon;
  state.weather.main = main;

  const { speed } = cityData.wind;
  state.wind = speed;

  countryData?.daily.forEach((el) => {
    state.daily.icon.push(el.weather[0].icon);
    state.daily.main.push(el.weather[0].main);
  });

  console.log(state.daily.main);

  return weatherAppView._generateMarkup(state);
};
