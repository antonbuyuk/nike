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
    getData ({ commit, state }, { url }) {
        return this.$axios({
            method: 'GET',
            url: `${url}`
        })
            .then(({ data }) => {
                return data;
            })
            .catch(({ response }) => {
                console.log(response);
            });
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
