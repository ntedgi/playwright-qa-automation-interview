import { Locator } from '@playwright/test';
import {  } from "";


test.describe("Active list page tests" {

  
    test.beforeAll{
        navigateToPage(page,Locator.Active) 
    })
  
    test.afterAll({})
  
    test('should validate item added to list' {    
      await validateAddItemAddtoList(page, itemName, listName)
    })

    test('should validate Undo action in list' {    
        await clickActionButton(page, button.undo);
    })

    test('should validate Redo action in list' {    
        await clickActionButton(page, button.redo);
    })

    test('should validate text field chars' {    
        await validateTextFieldChars(page)
    })