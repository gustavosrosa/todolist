const NAME_LOCAL_STORAGE = "todos";

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
            this.setItemStorage(this.tasks);
        },
        addNewTask() {
            if (this.newTask.title.trim() !== '') {
                this.tasks.push(this.newTask);

                this.newTask = {
                    done: false,
                };
            }
            this.setItemStorage(this.tasks);
        },
        setItemStorage(task) {
            window.localStorage.setItem(NAME_LOCAL_STORAGE, JSON.stringify(task));
        },
        getItemStorage() {
            return window.localStorage.getItem(NAME_LOCAL_STORAGE);
        }
    },
    created() {
        this.tasks = this.getItemStorage() ? JSON.parse(this.getItemStorage()) : this.tasks;
    },
    updated() {
        this.setItemStorage(this.tasks);
    }

};

Vue.createApp(todosApp).mount("#app");