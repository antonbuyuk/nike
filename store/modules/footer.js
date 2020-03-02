const state = () => ({
    menu1: null,
    menu2: null,
    menu3: null,
    socialsList: null
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
