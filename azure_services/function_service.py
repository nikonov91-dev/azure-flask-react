import requests
import os

class FunctionService:
  def __init__(self):
    self.city = '?'
    self.api_key = os.getenv('WEATHER_API_KEY')

  def _get_weather_url(self, lat, long):
    return f'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={long}&exclude=current&appid={self.api_key}'

  def get_weather(self, lat, long):
    result = requests.get(self._get_weather_url(lat, long))
    pass

  def interrogate_weather_server(self):
    pass