import { test, expect } from '@playwright/test';

test('Fields using css', async ({ page }) => {
  await page.goto('https://qaplayground.vercel.app/');
  
  await page.locator('#txt-name').fill('Test_Playwright');
  await page.locator('#txt-email').fill('test@playwright.com');
  await page.locator('#txt-phone').fill('+123456789012');
  await page.locator('#txt-password').fill('123456789012');
  await page.locator('//button[@id="btn-form-submit"]').click();
  await expect(page.locator('#form-result')).toHaveText("✓ Form submitted — Name: Test_Playwright | Email: test@playwright.com");
});   

test('buttons ', async ({ page }) => {
    await page.goto('https://qaplayground.vercel.app/');
    await page.locator('#btn-normal-click').click();
    await expect(page.locator('#btn-output')).toHaveText("✓ Normal click registered");
    await page.locator('#btn-double-click').dblclick();
    await expect(page.locator('#btn-output')).toHaveText("✓ Double click detected!"); 
    await page.locator('#btn-right-click').click({ button : 'right'});
    await expect(page.locator('#btn-output')).toHaveText("✓ Right-click (contextmenu) event detected!");    
});

test('checkbox and radion buttons ', async ({ page }) => {
    await page.goto('https://qaplayground.vercel.app/');
    await page.locator('#chk-apple').click();
    await page.locator('#chk-banana').click();
    await expect(page.locator('#chk-output')).toHaveText("Selected: apple, banana");
    await page.locator('#chk-reveal').click();
    await expect(page.locator('#secret-text')).toHaveText("🎯 Hidden element revealed! (Locate with ID: secret-text)");
    await page.locator('#rad-intermediate').click(); 
    await expect(page.locator('#radio-output')).toHaveText("Selected level: intermediate");

});
