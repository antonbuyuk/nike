export default $axios => resource => ({
    get (url) {
        return $axios.$get(`${resource}/${url}`);
    }
});
