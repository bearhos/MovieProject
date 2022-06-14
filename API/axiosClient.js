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
    paramsSerializer: params => queryString.stringify({...params, api_key: apiConfig.apiKey})
});

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
   console.log(JSON.stringify(error))
    throw error;
});
export const UserClient = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        'Accept' : 'application/json'
    },
    paramsSerializer: params => queryString.stringify({...params, api_key: apiConfig.apiKey, session_id: '112cf99b660c15fd3a605b98ba68bf30bde46ca4'})
});

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
   console.log(JSON.stringify(error))
    throw error;
});

export default axiosClient;
