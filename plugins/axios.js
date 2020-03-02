export default function ({ $axios, redirect }) {
    $axios.interceptors.request.use((config) => {
        return config;
    }, function (error) {
        return Promise.reject(error);
    });
}
