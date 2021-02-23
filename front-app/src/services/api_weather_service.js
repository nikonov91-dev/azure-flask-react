export default class WeatherService {
  constructor() {
    this.API_WEATHER_URL = process.env.DEV_SERVER_URL + 'api/weather';
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
