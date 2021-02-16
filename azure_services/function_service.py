import requests
import os

LOCAL_URL = 'http://localhost:7071/api/weather_trigger'
AZURE_PORTAL_URL = 'https://alexnikonov-weather-processor.azurewebsites.net/api/weather_trigger'
DEVELOPMENT_VARIABLE = 'AZURE_FUNCTIONS_ENVIRONMENT'
DEVELOPMENT_NAME = 'development'


class FunctionService:
  def __init__(self):
    self.city = '?'
    self.api_key = os.getenv('WEATHER_API_KEY')

  def _get_weather_url(self, lat, long):
    return f'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={long}&exclude=current&appid={self.api_key}'

  def get_weather(self, lat, long):
    url = LOCAL_URL if os.getenv(DEVELOPMENT_VARIABLE) == DEVELOPMENT_NAME else AZURE_PORTAL_URL
    result = requests.get(self._get_weather_url(lat, long))
    pass

  def interrogate_weather_server(self):
    pass