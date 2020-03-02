const state = () => ({
    isEmpty: null,
    gallery: null,
    panel: null,
    price: null,
    sizes: null,
    colors: null,
    content: null
});

const getters = {

};

const mutations = {
    setBreadCrumbs (state, payload) {
        state.breadcrumbs = payload;
    },
    setData (state, data) {
        state[data.label] = data.data;
    }
};

const actions = {

};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
