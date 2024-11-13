// todoPage.js
const { expect } = require('@playwright/test');

class TodoPage {
    constructor(page) {
        this.page = page;
        this.todoInput = page.locator('.todo-input'); // Adjusted selector for the todo input field
        this.todoList = page.locator('.todo-list'); // Selector for list items in the todo list
        this.clearCompletedButton = page.locator('.clear-completed'); // Button to clear completed todos
        this.undoButton = page.locator('button.undo'); // Adjust based on the actual undo button selector
    }

    async open() {
        await this.page.goto('http://localhost:3006');
        await this.todoInput.waitFor(); // Wait for the input field to ensure the page has loaded
    }

    async addTodo(todoText) {
        await this.todoInput.fill(todoText); // Fill in the text in the todo input
        await this.todoInput.press('Enter'); // Press Enter to add the todo
    }

    async toggleTodo(index) {
        await this.todoList.nth(index).locator('item').click(); // Selects the checkbox to mark as complete
    }

    async deleteTodo(index) {
        await this.todoList.nth(index).hover();
        await this.todoList.nth(index).locator('button.destroy').click(); // Adjust if delete button selector differs
    }

    async clearCompleted() {
        await this.clearCompletedButton.click();
    }

    async undoLastAction() {
        await this.undoButton.click(); // Click the undo button
    }

    async assertTodoText(index, expectedText) {
        await expect(this.todoList.nth(index)).toContainText(expectedText);
    }

    async assertTodoCount(expectedCount) {
        await expect(this.todoList).toHaveCount(expectedCount);
    }

    async assertTodoCompleted(index, completed = true) {
        const todoItem = this.todoList.nth(index);
        const isCompleted = await todoItem.locator('input.toggle').isChecked();
        expect(isCompleted).toBe(completed);
    }
}

module.exports = { TodoPage };
