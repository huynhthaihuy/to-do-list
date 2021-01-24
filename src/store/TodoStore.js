import React from "react"
import ReactDOM from "react-dom"
import { observer } from "mobx-react"
import { makeAutoObservable, autorun, runInAction } from "mobx"

class TodoStore {
    arrTaskList = [
        {
            title: 'title 1',
            content: 'hoc react',
            status: 'done',
        },
        {
            title: 'title 2',
            content: 'lam bai  react lay diem',
            status: 'cancel',
        },
        {
            title: 'title 3',
            content: 'di tre nop phat',
            status: 'pending',
        },
    ]
    constructor() {
        makeAutoObservable(this)
    }

    increase() {
        this.secondsPassed += 1
    }

    reset() {
        this.secondsPassed = 0
    }

    addNewTask(task) {
        this.arrTaskList.push(task);
    }
    
    removeTodo(todo) {
        this.arrTaskList.splice(this.arrTaskList.indexOf(todo), 1);
    }
}

const todoStore = new TodoStore()

export default todoStore;