export default class WeatherService {
  constructor(apiUrl = 'http://127.0.0.1:5000/api/') {
    this.API_WEATHER_URL = apiUrl + 'weather';
  }

  _resHandler = (res) => {
    if (res.ok)
      return res.json();
    else throw new Error(res)
  }

  getWeatherForCity = (long, lat) => {
    fetch(`${this.API_WEATHER_URL}?long=${long}&lat=${lat}`)
      .then(this._resHandler)
      .catch(e => {
        console.log(e);
        return e
      })
  }

}
