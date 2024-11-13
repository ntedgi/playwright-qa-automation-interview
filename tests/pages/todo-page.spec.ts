// todoTest.spec.js
const { test, expect } = require('@playwright/test');
const { TodoPage } = require('./todo-page');

test.describe('Todo App with Undo', () => {
    test.beforeEach(async ({ page }) => {
        const todoPage = new TodoPage(page);
        await todoPage.open();
    });

    test.only('should add a new todo', async ({ page }) => {
        const todoPage = new TodoPage(page);
        await todoPage.addTodo('Buy milk');
        await todoPage.assertTodoCount(1);
        await todoPage.assertTodoText(0, 'Buy milk');
    });


    test.only('should add 2 new todo', async ({ page }) => {
        const todoPage = new TodoPage(page);
        await todoPage.addTodo('Buy milk');
        await todoPage.addTodo('Buy Soda');
        await todoPage.assertTodoCount(1);
        await todoPage.assertTodoText(0, 'Buy milk');
        await todoPage.assertTodoText(1, 'Buy Soda');
    });

    test('should complete a todo', async ({ page }) => {
        const todoPage = new TodoPage(page);
        await todoPage.addTodo('Do laundry');
        await todoPage.toggleTodo(0);
        await todoPage.assertTodoCompleted(0, true);
    });

    test('should delete a todo', async ({ page }) => {
        const todoPage = new TodoPage(page);

        await todoPage.addTodo('Learn Redux');
        await todoPage.assertTodoCount(1);
        await todoPage.deleteTodo(0);
        await todoPage.assertTodoCount(0);
    });

    test('should clear completed todos', async ({ page }) => {
        const todoPage = new TodoPage(page);

        await todoPage.addTodo('Write tests');
        await todoPage.toggleTodo(0); // Mark it as completed
        await todoPage.clearCompleted();
        await todoPage.assertTodoCount(0);
    });

    test('should undo the last action', async ({ page }) => {
        const todoPage = new TodoPage(page);

        await todoPage.addTodo('Walk the dog');
        await todoPage.deleteTodo(0); // Delete the todo
        await todoPage.undoLastAction(); // Undo the delete action
        await todoPage.assertTodoCount(1);
        await todoPage.assertTodoText(0, 'Walk the dog');
    });
});
