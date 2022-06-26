import { weatherState } from "./model.js";

const API_KEY = "1c3104c319d355090fa8b3087965cc96";

const currectPosition = async () => {
  try {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((success, _) => {
        const { latitude, longitude } = success.coords;

        console.log(latitude, longitude);

        const getPositionApi = fetch(
          `http://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=true`
        );
        console.log(getPositionApi);
        // const positionData = getPositionApi.json();
        // console.log(positionData);
      });
    }
  } catch (err) {
    throw err;
  }
};
currectPosition();

export const AJAX = async (city) => {
  try {
    // City Weather Api
    const getCityWeather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    const cityWeatherData = await getCityWeather.json();

    // Throwing API Error
    if (!getCityWeather.ok)
      throw new Error(`${getCityWeather.message} (${getCityWeather.status})`);

    const country = cityWeatherData.sys?.country;

    const getCountryCoords = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );
    const coordsData = await getCountryCoords.json();
    const [lat, lng] = coordsData[0]?.latlng;

    // Country Weather Api
    const countryWeather = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely&appid=${API_KEY}`
    );
    const countryWeatherData = await countryWeather.json();

    return weatherState(cityWeatherData, countryWeatherData);
  } catch (err) {
    throw err;
  }
};
