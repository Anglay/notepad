export default {
    ADD_NOTE: function(state, item) {
        if (item.title && item.content) {
            let todoInfo = {}
            todoInfo.isDone = false;
            todoInfo.date = (new Date()).toLocaleDateString() + " " + (new Date()).toLocaleTimeString();
            if (state.todoList.length == 0) {
                todoInfo.id = 0
            } else {
                let todoFirst = state.todoList[state.todoList.length - 1];
                todoInfo.id = todoFirst.id + 1;
            }
            todoInfo.title = item.title;
            todoInfo.content = item.content;
            state.todoList.push(todoInfo);
        }
    },
    VIEW_DETAIL: function(state, item) {
        state.isShow = true;
        state.detail = item;
    },
    HIDE_DETAIL: function(state) {
        state.isShow = false;
        state.detail = {};
    },
    DONE_NOTE: function(state, id) {
        state.todoList.map((item) => {
            if (item.id == id) {
                item.isDone = !item.isDone;
            }
        });
    },
    DEL_NOTE: function(state, item) {
        let id = item.id;
        state.todoList = state.todoList.filter(function(item) {
            if (item.id != id) {
                return item;
            }
        })
    }
}