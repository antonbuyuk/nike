export default function ({ $axios, redirect }) {
    $axios.interceptors.request.use((config) => {
        // Do something before request is sent
        return config;
    }, function (error) {
        // Do something with request error
        console.log(error.config)
        return Promise.reject(error);
    });

    // $axios.onRequest((config) => {
        // console.log(config.url, config.headers.Authorization);
    // });
}
