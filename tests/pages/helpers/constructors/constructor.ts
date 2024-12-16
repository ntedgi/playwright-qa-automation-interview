constructor(page) {
    this.page = page;
    this.todoInput = page.locator('.todo-input'); // Adjusted selector for the todo input field
    this.todoList = page.locator('.todo-list'); // Selector for list items in the todo list
    this.item = page.locator('.item'); // Selector for individual todo items
}

actionButtons(page) {
    this.undoButton = page.locator('button.undo'); 
    this.redoButton = page.locator('button.redo'); 
}

listNames(page) {
    this.completed = page.locator('button.completed'); 
    this.active = page.locator('button.active'); 
    this.all = page.locator('button.all'); 
}