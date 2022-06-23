import WeatherAppView from "./view.js/weatherAppView.js";
import { AJAX } from "./ajax.js";
import weatherAppView from "./view.js/weatherAppView.js";

const searchCountry = (country) => {
  weatherAppView._overlay();

  return AJAX(country);
};

const init = () => {
  // Default Location
  searchCountry("biratnagar");

  // Searched Location
  WeatherAppView._searchInput(searchCountry);
};
init();
