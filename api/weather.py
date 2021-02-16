from flask import request
from . import api

route = '/api/weather'

@api.route(route, methods=['GET'])
def get_weather():
  long = request.args.get('long')
  lat = request.args.get('lat')
  return {'status': 200}
