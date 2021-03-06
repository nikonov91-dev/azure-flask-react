import os
from azure.storage.blob import BlobServiceClient, BlobClient, ContainerClient


# add variable
# https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-python
# Retrieve the connection string for use with the application. The storage
# connection string is stored in an environment variable on the machine
# running the application called AZURE_STORAGE_CONNECTION_STRING. If the environment variable is
# created after the application is launched in a console or with Visual Studio,
# the shell or application needs to be closed and reloaded to take the
# environment variable into account.
class BlobManager:
  def __init__(self): 
    self.uploading_files: None
    self.stored_files: {}
    self.connect_str = os.getenv('AZURE_STORAGE_CONNECTION_STRING')
    # Create the BlobServiceClient object which will be used to create a container client
    self.blob_service_client = BlobServiceClient.from_connection_string(self.connect_str)
    self.container_name = os.getenv('AZURE_STORAGE_CONTAINER_NAME')

  def __getBlobClient(self, name):
    return BlobClient.from_connection_string(conn_str=self.connect_str, container_name=self.container_name, blob_name=name)

  def __blobUploader(self, name, data):
    self.__getBlobClient(name).upload_blob(data)

  def upload_files(self, uploading_files):
    for name, value in uploading_files.items():
      self.__blobUploader(name, value.stream)

  def download(self, fileName):
    return self.__getBlobClient(fileName).download_blob()

  def list_blobs(self):
    return ContainerClient.from_connection_string(conn_str=self.connect_str, container_name=self.container_name).list_blobs()
