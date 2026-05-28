import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await page.getByRole('textbox', { name: 'Username:' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).fill('rahulshettyacademy');
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).fill('Learning@830$3mK2');
  await page.getByRole('checkbox', { name: 'I Agree to the terms and' }).check();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.getByRole('link', { name: 'ProtoCommerce Home' })).toBeVisible();
  
  await expect(page.getByRole('link', { name: 'iphone X' })).toBeVisible();
  await page.locator('app-card').filter({ hasText: 'iphone X $24.99 Lorem ipsum' }).getByRole('button').click();
  await page.locator('app-card').filter({ hasText: 'Samsung Note 8 $24.99 Lorem' }).getByRole('button').click();
  await page.getByText('Checkout ( 2 ) (current)').click();
  await expect(page.getByRole('link', { name: 'iphone X' })).toBeVisible();
  await page.getByRole('row', { name: 'iphone X by Sim cart Status:' }).locator('#exampleInputEmail1').click();
  await page.getByRole('row', { name: 'iphone X by Sim cart Status:' }).locator('#exampleInputEmail1').fill('5');
  await page.getByRole('button', { name: 'Checkout' }).click();
  await expect(page.getByRole('button', { name: 'Purchase' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Please choose your delivery' }).click();
  await page.getByRole('textbox', { name: 'Please choose your delivery' }).pressSequentially('India');
  await page.getByRole('list').filter({ hasText: 'India' }).click();
  await page.getByText('I agree with the term &').click();
  await page.getByRole('button', { name: 'Purchase' }).click();
  await expect(page.getByText('× Success! Thank you! Your')).toBeVisible();

//   await page.getByText('Checkout ( 4 ) (current)').click();
//   await page.getByRole('row', { name: 'iphone X by Sim cart Status:' }).getByRole('button').click();
//   await page.getByRole('row', { name: 'Blackberry by Sim cart Status' }).getByRole('button').click();
//   await page.getByRole('button', { name: 'Checkout ' }).click();
//   await page.getByRole('button', { name: 'Purchase' }).click();
//   await expect(page.getByRole('strong')).toContainText('Success!');
});