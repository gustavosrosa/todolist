const NAME_LOCAL_STORAGE = "todos";
const APP = "#app";
const emptyList = [];
const emptyString = '';

const todosApp = {

    data() {
        return {
            tasks: emptyList,
            newTask: {
                done: false,
            }
        }
    },
    methods: {
        clearTasks() {
            this.tasks = emptyList;
            this.setItemStorage(this.tasks);
        },
        addNewTask() {
            if (this.newTask.title.trim() !== emptyString) {
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

Vue.createApp(todosApp).mount(APP);