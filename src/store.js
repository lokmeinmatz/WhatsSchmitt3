import Vue from 'vue'

import Vuex from 'vuex'
import {testChats} from './test'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: {
      name: 'Matthias',
      status: 'hier könnte ihre Werbung stehen'
    },
    /**@type {Array<Chat>} */
    chats: []
  },

  getters: {
    user: state => state.user,
    chats: state => state.chats
  },

  mutations: {
    updateUserStatus: (state, newStatus) => state.user.status = newStatus,
    updateAllChats: (state, newChats) => state.chats = newChats
  },
  actions: {
    fetchChatData(ctx) {
      setTimeout(() => {
        ctx.commit('updateAllChats', testChats)
      }, 1000)
    }
  }
})