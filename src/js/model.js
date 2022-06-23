import weatherAppView from "./view.js/weatherAppView.js";

const state = {
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
  hours: "",
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

  return weatherAppView._generateMarkup(state);
};
