export default function ({ $axios, redirect }) {
    $axios.interceptors.request.use((config) => {
        return config;
    }, function (error) {
        console.log(error.config);
        return Promise.reject(error);
    });
}
