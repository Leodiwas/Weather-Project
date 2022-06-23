import WeatherAppView from "./view.js/weatherAppView.js";
import { AJAX } from "./ajax.js";
import weatherAppView from "./view.js/weatherAppView.js";

const searchCountry = (country) => {
  weatherAppView._overlay();

  return AJAX(country);
};

const init = () => {
  WeatherAppView._searchInput(searchCountry);
  // searchCountry("nepal");
};
init();
