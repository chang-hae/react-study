import axios from 'axios';

let isTokenRefreshing = false;
let refreshSubscribers = [];

const myAxios = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 10000,
});

const onTokenRefreshed = (expireAt) => {
    refreshSubscribers.map((callback) => callback(expireAt));
    refreshSubscribers = [];
};

const addRefreshSubscriber = (callback) => {
    refreshSubscribers.push(callback);
};

myAxios.interceptors.response.use(
    (response) => response,
    async (error) => {
        const { config, response: { status }, } = error;
        const originalRequest = config;
        if (status === 401) {
            const retryOriginalRequest = new Promise((resolve) => {
                addRefreshSubscriber((expireAt) => {
                    originalRequest.headers.Authorization = "Bearer " + expireAt;
                    resolve(axios(originalRequest));
                });
            });

            if (!isTokenRefreshing) {
                isTokenRefreshing = true;
                const response = await myAxios.get('/refresh-token');
                isTokenRefreshing = false;
                onTokenRefreshed(response.data.newToken);
            }
            
            return retryOriginalRequest;
        }
        return Promise.reject(error);
    });

export default myAxios;