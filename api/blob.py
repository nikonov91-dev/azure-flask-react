from flask import request
from . import api

from azure_services.blob_manager import BlobManager
blobManager = BlobManager()


@api.route('/', methods=['POST', 'GET'])
def test():
  return 'test word'


@api.route('/api/upload', methods=['POST'])
def upload_service():
  if request.method == 'POST':
    api.blobManager.upload_files(request.files)
    return {'status': 200}
