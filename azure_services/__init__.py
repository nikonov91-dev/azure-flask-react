from flask import Blueprint

azure_services = Blueprint('azure_services', __name__)

from . import blob_manager
from .blob_manager import BlobManager