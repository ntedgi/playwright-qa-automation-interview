import { Locator } from '@playwright/test';
import {  } from "";

test.describe('Active list page tests', () => {
    test.beforeEach{
        navigateToPage(page,Locator.Completed);
    })
  
    test.afterAll({

    });
  
    test('should validate new item is not added to completed list', async ({ page }) => {  
        await validateAddItemAddtoList(page);
        await itemListCount(page, expectedCount);
    })
    

    test('should validate Undo action in list', async ({ page }) => {    
        await clickActionButton(page, button.redo);
        await itemListCount(page, expectedCount);
    })

    test('should validate Redo action in list', async ({ page }) => {    
        await clickActionButton(page, button.undo);
        await itemListCount(page, expectedCount);
    })

    test('should validate text field chars', async ({ page }) => {   
        await validateTextFieldChars(page);
    })

    test('should validate text field chars', async ({ page }) => {    
        await validateItemInCompletedList(page);
        await itemListCount(page, expectedCount);
    })

});