const state = () => ({
    menu: null
});

const getters = {

};

const mutations = {
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
