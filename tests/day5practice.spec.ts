import { test, expect } from '@playwright/test';
import { title } from 'node:process';

test('Simple Popup', async ({ page }) => {
    await page.goto('https://qaplayground.vercel.app/')
    await expect(page).toHaveTitle(/QA Automation Practice Playground/i);
    // await page.getByTestId('btn-simple-alert').click();
    await page.getByRole('button', { name : 'Simple Alert'}).click();
    page.once('dialog', async dialog =>{
        await dialog.accept();
    })
    await expect(page.locator('#alert-output')).toHaveText('Simple alert was accepted');
    
});

test('confirmation alert', async ({ page }) => {
    await page.goto('https://qaplayground.vercel.app/')
    
     // await page.getByTestId('btn-confirm-alert').click();
    await page.getByRole('button', { name: 'Confirmation Alert'}).click();
    page.once('dialog', async dialog => {
    //   await dialog.accept();
      await dialog.dismiss();
    })
    // await expect(page.locator('#alert-output')).toHaveText('✓ Confirmation accepted')
    await expect(page.locator('#alert-output')).toHaveText('✗ Confirmation dismissed');

})

test('Prompt Alert', async ({ page }) => {
    await page.goto('https://qaplayground.vercel.app/')
    
    page.once('dialog', async dialog => {
        await dialog.accept('urmil')
    })
    await page.getByRole('button', { name : 'Prompt alert'}).click()
    await expect(page.locator('#alert-output')).toHaveText('✓ Prompt input: "urmil"');

})

test('model', async ({ page }) => {
    await page.goto('https://qaplayground.vercel.app/')
    await page.getByRole('button', { name: 'Open Modal'}).click();
    await expect(page.locator('#modal-output')).toHaveText('Modal is open');
    // await page.getByRole('button', {name: 'Confirm'}).click();  Not working showing the strict mode violation
    await page.getByTestId('modal-input').fill("urmil");
    await page.locator('#btn-modal-confirm').click();
    await expect(page.locator('#modal-output')).toHaveText('Modal closed');
})

test.only('Multi Tabs', async ({ browser }) => {
    const u1 = await browser.newContext();
    const u2 = await browser.newContext();

    const pageone = await u1.newPage();
    const pagetwo = await u2.newPage();
    
    await pageone.goto('https://rahulshettyacademy.com/client');
    await pagetwo.goto('https://rahulshettyacademy.com/client');

    await pageone.locator('#userEmail').fill('anshika@gmail.com ');
    await pageone.locator('#userPassword').fill('Iamking@000');
    await pageone.locator('#login').click();

    await pagetwo.locator('#userEmail').fill('anshika@gmail.com ');
    await pagetwo.locator('#userPassword').fill('Iamking@000');
    await pagetwo.locator('#login').click();
    await u1.close();
    await u2.close();
    

    //for user one tata cliq drop dowm handling
    //for user two tat cliq kitchen radio button and iframe
})
