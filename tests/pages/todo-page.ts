// todoPage.js
import {Locator} from "@playwright/test";
import TodoListComponent from "./components/todo-list-component";

const {expect} = require('@playwright/test');

class TodoPage {
    
    readonly todoListComponent : TodoListComponent

    constructor(page) {
        this.page = page;
        this.todoListComponent = new TodoListComponent(page)
    }

    async open() {
    }

    async addTodo(todoText) {
    }

    async toggleTodo(index) {
    }

    async deleteTodo(index) {
    }

    async clearCompleted() {
    }

    async undoLastAction() {
    }

    async assertTodoText(index, expectedText) {
    }

    async assertTodoCount(expectedCount) {
    }

    async assertTodoCompleted(index, completed = true) {
    }
}

module.exports = {TodoPage};
