import datetime
import logging

import azure.functions as azure_func

import pydevd_pycharm
pydevd_pycharm.settrace('127.0.0.1', port=9091, stdoutToServer=True, stderrToServer=True)

def main(mytimer: azure_func.TimerRequest) -> None:
    utc_timestamp = datetime.datetime.utcnow().replace(
        tzinfo=datetime.timezone.utc).isoformat()

    if mytimer.past_due:
        logging.info('The timer is past due!')

    logging.info('Python timer trigger function ran at %s', utc_timestamp)
