import { test, expect } from '@playwright/test';
 
test('RedBus - Ahmedabad to Surat with Maximum Actions', async ({ page }) => {
 
  await page.goto('https://www.redbus.in/');
  await expect(page).toHaveTitle(/redBus/i);
 
  await page.locator('#srcinput').focus();
  await page.locator('#srcinput').clear();
  await page.locator('#srcinput').fill('Ahmedabad');
  await page.locator('.suggestion-item').filter({ hasText: /^Ahmedabad/ }).first().click();
 
  await page.locator('#destinput').click();
  await page.locator('#destinput').clear();
  await page.locator('#destinput').fill('Surat');
  await page.locator('#destinput').press('ArrowDown');
  await page.locator('#destinput').press('Enter');
  await page.locator('#destinput').blur();
 
  await page.locator('.dateWrapper___fed9d3').click();
  await page.locator('.calendarDate').filter({ hasText: /^20$/ }).first().hover();
  await page.locator('.calendarDate').filter({ hasText: /^20$/ }).first().click();
 
  await page.locator('.searchButtonWrapper___1c1fc9').click();
  await page.waitForLoadState('domcontentloaded');
 
  await page.locator('[role="checkbox"] li').filter({ hasText: /^AC/ }).click();
  await page.locator('.filterTitle___7cb35f').filter({ hasText: 'Dropping points' }).scrollIntoViewIfNeeded();
  await page.locator('.filterTitle___7cb35f').filter({ hasText: 'Dropping points' }).click();
 
//   await page.getByRole('checkbox', { name: 'Barodda Pristage (4)' }).isChecked();
//   await page.locator('.tupleWrapper___c5ee06 undefined').filter({ hasText: 'Dropping points' }).click();
 
  await page.getByRole('button', { name: 'Mangalmurti Travels(MAHAKAL), Bharat Benz A/C Sleeper (2+1). Departs 23:05,' }).click();
  await page.getByLabel('Seat number A, lower deck,').click();
  await page.getByLabel('Select boarding & dropping').click();
  await page.getByLabel(':05 Adalaj,Trimandir').click();
  await page.getByLabel('05:05, 21 Jun Sarthana').click();
  await page.getByLabel('Continue booking, Amount ₹900').click();
});