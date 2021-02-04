from flask import Blueprint

weather_processor = Blueprint('weather_processor', __name__)

from . import processor
from .processor import WeatherProcessor
