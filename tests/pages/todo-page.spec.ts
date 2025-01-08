// todoTest.spec.js
const { test, expect } = require('@playwright/test');
const { TodoPage } = require('./todo-page');

test.describe('Todo App with Undo', () => {
    test.beforeEach(async ({ page }) => {
    });

    test.only('should add a new todo', async ({ page }) => {
    });


    test.only('should add 2 new todo', async ({ page }) => {
    });

    test('should complete a todo', async ({ page }) => {
    });

    test('should delete a todo', async ({ page }) => {
    });

    test('should clear completed todos', async ({ page }) => {
    });

    test('should undo the last action', async ({ page }) => {
    });
});
