import axios from 'axios';
import { BASE_PATH } from '../config';
import { successResponse } from './interceptors';

const request = axios.create({
	baseURL: BASE_PATH,
	timeout: 30000, // 30 seconds timeout
});

request.interceptors.response.use(successResponse);

export default request;
