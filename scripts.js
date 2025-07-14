const todosApp = {

    data() {
        return {
            tasks: [],
            newTask: {
                done: false,
            }
        }
    },
    methods: {
        clearTasks() {
            this.tasks = [];
        },
        addNewTask() {
            if (this.newTask.title.trim() !== '') {
                this.tasks.push(this.newTask);
            }
            this.newTask = {
                done: false,
            };
        }
    }

};

Vue.createApp(todosApp).mount("#app");