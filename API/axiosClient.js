import axios from 'axios'
import queryString from 'query-string';

import apiConfig from './apiConfig';
import { Id, session_id } from './movieApi';

const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json'
    },
    paramsSerializer: params => queryString.stringify({...params})
});

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    console.error('Status:', error.response.status);
    console.error('Data:', error.response.data);
    console.error('Headers:', error.response.headers);
   console.log(JSON.stringify(error))
    throw error;
    
});
export default axiosClient;
