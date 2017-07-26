import Vue from "vue"
import Vuex from "vuex"
import actions from "./actions"
import mutations from "./mutations"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todoList: [],
        todoInfo: {
            id: 0,
            date: "",
            title: "",
            content: "",
            isDone: false
        },
        detail: {},
        isShow: false
    },
    actions: actions,
    mutations: mutations,
    getters: {
        filterAll: function(state) {
            let todoList = state.todoList;
            return todoList;
        },
        filterDoned: function(state) {
            let todoList = state.todoList.filter(function(item) {
                if (item.isDone) {
                    return item
                }
            })
            return todoList;
        },
        filterNoDoned: function(state) {
            let todoList = state.todoList.filter(function(item) {
                if (!item.isDone) {
                    return item;
                }
            })
            return todoList;
        }
    }
})