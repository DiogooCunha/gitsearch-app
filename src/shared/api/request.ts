import axios from 'axios';

import { successResponse } from './interceptors';

const request = axios.create({
	//baseURL: url do back ex: http://localhost:3001
	timeout: 30000, // 30 seconds timeout
});

request.interceptors.response.use(successResponse);

export default request;
