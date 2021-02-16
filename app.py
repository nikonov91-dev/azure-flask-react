from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


# from azure_services import azure_services as azure_services_bp
# app.register_blueprint(azure_services_bp)
#
#
# from api import api as api_bp
# app.register_blueprint(api_bp)
#
#
# from weather_processor import weather_processor as wp_bp
# app.register_blueprint(wp_bp)


# from azure_functions import azure_functions as af_bp
# app.register_blueprint(af_bp)
