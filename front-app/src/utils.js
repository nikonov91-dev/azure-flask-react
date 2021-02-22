import dotenv from 'dotenv';

dotenv.config()
export const getFrontAppUrl = () => process.env.REACT_DEV_FRONT_APP_URL ? process.env.REACT_DEV_FRONT_APP_URL : '';

export const getServerUrl = () => process.env.DEV_SERVER_URL ? process.env.DEV_SERVER_URL : '127.0.0.1.5000/';