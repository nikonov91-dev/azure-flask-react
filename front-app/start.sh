#!/bin/bash

"
DEV_SERVER_URL: $(secrets.DEV_SERVER_URL)
REACT_DEV_FRONT_APP_URL: $(secrets.REACT_DEV_FRONT_APP_URL)
TEST: $(secrets.TEST)
" > .env
echo "dev url:"
echo "$DEV_SERVER_URL"
echo "first line test"
echo "$secrets.DEV_SERVER_URL"
echo "second line test"
echo "$env.secrets.DEV_SERVER_URL"
echo "finish"
echo
echo ".env reading"
while read line; do echo $line; done < .env