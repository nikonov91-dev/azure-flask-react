export default class WeatherService {
  constructor(apiUrl = 'http://127.0.0.1:5000/api/') {
    this.API_WEATHER_URL = apiUrl + 'weather/';
  }

  _resHandler = (res) => {
    if (res.ok)
      return res.json();
    else throw new Error(res)
  }

  getWeatherForCity = (city) => {
    fetch(this.API_WEATHER_URL + city)
      .then(this._resHandler)
      .then()
      .catch(e => {
        console.log(e);
        return e
      })
  }

}
