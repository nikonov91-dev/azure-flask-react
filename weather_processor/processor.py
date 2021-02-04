from . import weather_processor
import azure.functions as azure_func

class WeatherProcessor:
    def __init__(self):
        pass

    def request_wheather(self, req: azure_func.HttpRequest) -> azure_func.HttpResponse:
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