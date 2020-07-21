import Vue from 'vue'
import Vuex from 'vuex'
import GitHubAPI from '../DAL/github.api'

Vue.use(Vuex);
const gitHubApi = new GitHubAPI();

export default new Vuex.Store({
    state: {
        repos: []
    },

    getters: {
        getRepos: (state) => {
            return state.repos;
        }
    },

    mutations: {
        setRepos(state, repos) {
            state.repos = repos;
        }
    },

    actions: {
        fetchRepos({ commit }, username) {
            gitHubApi.getRepos(username).then((data) => commit("setRepos", data));
        }
    }
});