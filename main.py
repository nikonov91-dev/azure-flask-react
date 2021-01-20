from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


from azure_services import azure_services as azure_services_bp
app.register_blueprint(azure_services_bp)


from api import api as api_bp
app.register_blueprint(api_bp)