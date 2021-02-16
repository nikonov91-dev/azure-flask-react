import {Component} from 'react';
import WeatherService from "../services/api_weather_service";

export default class WeatherMonitor extends Component {
  constructor(props) {
    super(props);
    this.service = new WeatherService()
  }

  state = {
    long: '0',
    lat: '0'
  }

  render() {
    return <div>
      <input type="button" value={'Use my location'} onClick={this.getOnClick}/>
      <input type="number" value={this.state.long} onChange={e => this.handleCityName(e, 'long')}
             placeholder='longitude'/>
      <input type="number" value={this.state.lat} onChange={e => this.handleCityName(e, 'lat')} placeholder='latitude'/>
      <input value={'submit'} type="button" onClick={this.runWeatherChart}/>
    </div>
  }

  getOnClick = () =>
    navigator.geolocation.getCurrentPosition(
      ({coords: {latitude: lat = 0,longitude: long= 0 }}) =>
        this.setState({lat, long}))

  handleCityName = ({target: {value}}, key) => this.setState({[key]: value})

  runWeatherChart = () => this.service.getWeatherForCity(this.state.long, this.state.lat)
}
