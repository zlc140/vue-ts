import Vuex, { ActionTree } from 'vuex'
const state = {
    msg: '我是msg的state',
}
let id = 0

const actions: ActionTree<any, any> = {
    changeMsg({state, commit}, msg: any) {
        const newMsg = msg + id++
        commit('SET_MSG', newMsg)
    },
}
// const actions: any = {
//     changeMsg ({state, commit}, msg: any) {
//         let newMsg = msg + id++;
//         commit('SET_MSG', newMsg)
//     }
// }

export default {
    namespaced: true,
    state,
    actions,
    mutations: {
        SET_MSG(state: any, msg: any) {
            state.msg = msg
        },
    },
}

