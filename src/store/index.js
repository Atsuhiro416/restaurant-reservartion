import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import axios from "axios";
import router from '../router/index';

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    paths: ['auth', 'user']
  })],
  state: {
    auth: "",
    user: "",
    message: {
      email: "",
      password: "",
    },
  },
  getters: {
    emailMessage(state) {
      return state.message.email
    },
    passwordMessage(state) {
      return state.message.password
    }
  },
  mutations: {
    auth(state, payload) {
      state.auth = payload;
    },
    user(state, payload) {
      state.user = payload;
    },
    getEmailMessage(state, payload) {
      state.message.email = payload;
    },
    getPasswordMessage(state, payload) {
      state.message.password = payload;
    },
    logout(state, payload) {
      state.auth = payload;
    }
  },
  actions: {
    async login({ commit }, { email, password }) {
      const responseLogin = await axios.post(
        "http://localhost:8000/api/login",
        {
          email: email,
          password: password,
        })
        .then(response => {
          console.log(response);
          return response;
        })
        .catch(error => {
          console.log(error.response);
          return error.response;
        });
      if (responseLogin.data.auth === true) {
        commit("auth", responseLogin.data.auth);
      } else if (responseLogin.data.auth === false) {
        commit("getPasswordMessage", responseLogin.data.errorMessage);
        commit("getEmailMessage", null);
      } else if (responseLogin.request.status === 422) {
        commit("getEmailMessage", responseLogin.data.errors.email[0]);
      }
      router.replace("/home");
    },
    async logout({ commit }) {
      const responseLogout = await axios.post("http://localhost:8000/api/logout");
      commit("logout", responseLogout.data.auth);
      router.replace("/");
    }
  },
  modules: {
  }
})
