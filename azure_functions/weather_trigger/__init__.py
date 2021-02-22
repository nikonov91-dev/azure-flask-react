import logging

import azure.functions as azure_func

import pydevd_pycharm
pydevd_pycharm.settrace('127.0.0.1', port=9091, stdoutToServer=True, stderrToServer=True)

def main(req: azure_func.HttpRequest) -> azure_func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    name = req.params.get('name')
    if not name:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            name = req_body.get('name')

    if name:
        return azure_func.HttpResponse(f"Hello, {name}. This HTTP triggered function executed successfully.")
    else:
        return azure_func.HttpResponse(
             "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.",
             status_code=200
        )
