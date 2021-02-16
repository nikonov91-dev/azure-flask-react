import {Component} from 'react';
import WeatherService from "../services/api_weather_service";

export default class WeatherMonitor extends Component {
  constructor(props) {
    super(props);
    this.service = new WeatherService()
  }

  state = {city: ''}

  render() {
    return <div>
      <input type="text" value={this.state.city} onChange={this.handleCityName}/>
      <input value={'submit'} type="button" onClick={this.runWeatherChart}/>
    </div>
  }

  handleCityName = ({target:{value}}) => this.setState({city: value})

  runWeatherChart = () => this.service.getWeatherForCity(this.state.city)
}
