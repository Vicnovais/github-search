import Vue from 'vue'
import Vuex from 'vuex'
import GitHubAPI from '../DAL/github.api'

Vue.use(Vuex);
const gitHubApi = new GitHubAPI();

export default new Vuex.Store({
    state: {
        repos: [],
        loading: false
    },

    getters: {
        getRepos: (state) => {
            return state.repos;
        },

        getLoading: (state) => {
            return state.loading;
        }
    },

    mutations: {
        setRepos(state, repos) {
            state.repos = repos;
        },

        toggleLoading(state) {
            state.loading = !state.loading;
        }
    },

    actions: {
        fetchRepos({ commit }, username) {
            if (!username) commit("setRepos", []);
            else {
                commit("setRepos", []);
                commit("toggleLoading");
                
                gitHubApi.getRepos(username).then((data) => {
                    commit("setRepos", data);
                    commit("toggleLoading");
                });
            }
        }
    }
});