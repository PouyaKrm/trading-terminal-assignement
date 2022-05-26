import axios from "axios";

import AxiosMockAdapter from 'axios-mock-adapter';

let axiosConfig = {
    baseURL: process.env.REACT_APP_API_BASE_PATH,
};

const axiosInstance = axios.create(axiosConfig);

export const axiosMockAdapterInstance= new AxiosMockAdapter(axiosInstance, { delayResponse: 0 });

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            return Promise.reject(error.response.data);
        } else {
            return Promise.reject({ message: "Something went wrong" });
        }
    }
);

export default axiosInstance;
