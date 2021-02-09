from flask import request
from . import api

route = '/api/weather/'


@api.route('route', methods=['GET'])
def getWeather(name):
  pass