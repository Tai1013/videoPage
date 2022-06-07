import Axios from "axios";

const axios = Axios.create({
    baseURL: 'http://localhost:3000',
    headers: { 'Content-Type': 'application/json' },
    timeout: 20000,
})

// 前置攔截器（發起請求之前的攔截）
axios.interceptors.request.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 後置攔截器（獲取到響應時的攔截）
axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.data) {
            const code = error.response.status;
            const msg = error.response.data.message;
            ElMessage.error(`Code: ${code}, Message: ${msg}`);
            console.error(`[Axios Error]`, error.response);
        } else {
            ElMessage.error(`${error}`);
        }
        return Promise.reject(error);
    }
);

export default axios;