from flask import Blueprint

azure_functions = Blueprint('azure-functions', __name__)

from . import weather_interrogator
from . import weather_trigger