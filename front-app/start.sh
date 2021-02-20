#!/bin/bash

"
DEV_SERVER_URL: $(secrets.DEV_SERVER_URL)
REACT_DEV_FRONT_APP_URL: $(secrets.REACT_DEV_FRONT_APP_URL)
TEST: $(secrets.TEST)
" > .env
echo "dev url:"
echo $DEV_SERVER_URL
echo $secrets.DEV_SERVER_URL
echo $env.secrets.DEV_SERVER_URL
echo "finish"