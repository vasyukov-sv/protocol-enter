import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        users: [],
        groups: [],
        stands: []
    },
    actions: {
        GET_USERS_FROM_API({commit}) {
            return axios('http://localhost:3000/users', {
                method: 'GET'
            })
                .then((response) => {
                    commit('SET_USERS_TO_VUEX', response.data)
                })
        },

        GET_GROUPS_FROM_API({commit}) {
            return axios('http://localhost:3000/groups', {
                method: 'GET'
            })
                .then((response) => {
                    commit('SET_GROUPS_TO_VUEX', response.data)
                })
        },

        GET_STANDS_FROM_API({commit}) {
            return axios('http://localhost:3000/stands', {
                method: 'GET'
            })
                .then((response) => {
                    commit('SET_STANDS_TO_VUEX', response.data)
                })
        }

    },
    mutations: {
        SET_USERS_TO_VUEX: (state, users) => {
            state.users = users
        },
        SET_GROUPS_TO_VUEX: (state, groups) => {
            state.groups = groups
        },
        SET_STANDS_TO_VUEX: (state, stands) => {
            state.stands = stands
        }

    },
    getters: {
        USERS(state) {
            return state.users;
        },
        GROUPS(state) {
            return state.groups;
        },
        STANDS(state) {
            return state.stands;
        }
    }
})

export default store;