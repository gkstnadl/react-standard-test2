import axios from "axios";

export const authApi = axios.create({
    baseURL: "https://moneyfulpublicpolicy.co.kr/",
    headers: {
        "Content-Type": "application/json"
    }
});

authApi.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("accessToken");
        if (config.url.includes("user")) {
            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`;
            } else {
                alert("인증이 필요합니다.");
                return Promise.reject("인증이 필요합니다.");
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
