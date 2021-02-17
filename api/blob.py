from flask import request, jsonify, send_file
import io
from . import api
from azure_services.blob_manager import BlobManager

blobManager = BlobManager()
route = '/api/blob/'


@api.route('/', methods=['POST', 'GET'])
def test():
  return 'test word'

def test2(route):
  return 'blob api testing root'


@api.route(route + 'upload/', methods=['POST'])
def upload_service():
  if request.method == 'POST':
    blobManager.upload_files(request.files)
    return {'status': 200}


@api.route(route + 'list/<name>', methods=['GET'])
def download_service(name):
  file = send_file(
    io.BytesIO(blobManager.download(name).readall()),
    mimetype='application/octet-stream',
    as_attachment=True,
    attachment_filename=name
  )
  return file


@api.route(route + 'list', methods=['GET'])
def list_service():
  blob_list = []
  for blob in blobManager.list_blobs():
    blob_list.append({'name': blob.name, 'size': blob.size})
  return jsonify(blob_list)
