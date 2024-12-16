const export validateItemInCompletedList({

    await navigateToPage(page, page.All);
    await markTodoAsComplete(page, index);
    await navigateToPage(page, page.Completed);


})