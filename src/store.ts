import Vue from 'vue'
import Vuex, { ActionTree } from 'vuex'
import { sysUserLogin } from '@/request/api/login'
import {getToken, setToken} from '@/utils/auth'
import Msg from './store/msg'
Vue.use(Vuex)

const actions: ActionTree<any, any> = {
  async Login({state, commit}, userInfo: any) {
    return new Promise((resolve, reject) => {
      sysUserLogin(userInfo).then((res: any) => {
        setToken(res.data.systoken)
        commit('SET_TOKEN', res.data.systoken)
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  toggleCollape({state, commit}) {
    commit('SET_COLLAPE')
  },
}

export default new Vuex.Store({
  state: {
    token: getToken,
    isCollape: false,
  },
  getters: {
    token: (state: any) => state.token,
    collape: (state: any) => state.isCollape,
  },
  actions,
  mutations: {
    SET_TOKEN(state: any, data: any) {
      state.token = data
    },
    SET_COLLAPE(state: any) {
      state.isCollape = !state.isCollape
    },
  },
  modules: {
    Msg,
  },
})
