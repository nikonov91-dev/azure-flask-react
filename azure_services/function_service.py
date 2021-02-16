from flask import request
import os

LOCAL_URL = 'http://localhost:7071/api/weather_trigger'
AZURE_PORTAL_URL = 'https://alexnikonov-weather-processor.azurewebsites.net/api/weather_trigger'
DEVELOPMENT_VARIABLE = 'AZURE_FUNCTIONS_ENVIRONMENT'
DEVELOPMENT_NAME = 'development'


class FunctionService:
  def __init__(self):
    self.city = '?'

  def get_weather(self):
    url = LOCAL_URL if os.environ(DEVELOPMENT_VARIABLE) == DEVELOPMENT_NAME else AZURE_PORTAL_URL
    return request.get(url)

  def interrogate_weather_server(self):
    pass