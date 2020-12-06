export const state = () => ({
    user: {},
    messages: [],
    users: []
})
export const actions = {
    SOCKET_newMessage({ commit }, data) {
        commit("addMessage", data)
    },
    SOCKET_updateUsers( {commit} , data) {
        commit("updUsers", data)
    }
}
export const mutations = {
    setUser(state, user) {
        state.user = user;
    }, 
    clearData(state) {
        state.user = {};
        state.messages = [];
        state.users = [];
    },
    // SOCKET_newMessage(state, message) {
    //     state.messages.push(message)
    // },
    addMessage(state, message) {
        state.messages.push(message)
    },
    updUsers(state, users) {
        state.users = users
    }
    
}

