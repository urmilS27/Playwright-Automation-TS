import { test, expect } from '@playwright/test';
 
test('TataCliq timeout error', async ({ page }) => {
 
  await page.goto('https://www.tatacliq.com/', {timeout:  180000 });
 
  await expect(page).toHaveTitle(/Tata CLiQ/i);
 
  const popup = page.getByRole('button', { name: 'No, Thanks' });
  if (await popup.isVisible()) await popup.click();
  await page.locator('#search-text-input').click();
  await page.locator('#search-text-input').fill('men kurta');
  await page.locator('.SearchResultItem__base').first().waitFor({ state: 'visible' });
  await page.locator('.SearchResultItem__base').first().click();
  await page.locator('.FilterDesktop__newFilCheckboxBlock').filter({ hasText: 'Kurta' }).nth(1).waitFor({ state: 'visible' });
  await page.locator('.FilterDesktop__newFilCheckboxBlock').filter({ hasText: 'Kurta' }).nth(1).click();
  await page.locator('.PlpComponent__base').nth(1).waitFor({ state: 'visible' });
  await page.locator('.PlpComponent__base').nth(1).locator('.ProductModule__electronicViewButtonNew4By4').locator('[role="button"]').click();
 
  await page.getByTitle('Close').waitFor({ state: 'visible' });
  await page.getByTitle('Close').click();
 
});
 