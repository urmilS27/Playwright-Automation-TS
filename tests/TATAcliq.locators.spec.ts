import { test, expect } from '@playwright/test';
 
test('TataCliq - Men Kurta Search, Filter, Wishlist, Close Popup', async ({ page }) => {
 
  await page.goto('https://www.tatacliq.com/');
 
  // await expect(page.locator('title')).toContainText('Tata CLiQ');
  // await expect(page.getByRole('heading').first()).toContainText('Tata');
  await expect(page).toHaveTitle(/Tata CLiQ/i);
 
  // page.locator('button').filter({ hasText: /no.*thanks/i }).click();
  // page.locator('[class*="PopupClose"]').click();
  // page.locator('//button[normalize-space(text())="No, Thanks"]').click();
  const popup = page.getByRole('button', { name: 'No, Thanks' });
  if (await popup.isVisible()) await popup.click();
 
  // page.locator('input[type="search"]')
  // page.locator('[data-test="control-input-field"]')
  // page.getByRole('searchbox')
  // page.locator('input[type="search"][autocomplete="off"]')
  // page.locator('//input[@type="search"]')
  await page.locator('#search-text-input').click();
  await page.locator('#search-text-input').fill('men kurta');
 
  // page.locator('#inside-search-wrapper .SearchResultItem__base').first()
  // page.getByText('fabindia men kurtas')
  // page.locator('//div[@id="inside-search-wrapper"]//div[@class="SearchResultItem__base"][1]')
  // page.locator('.SearchResultItem__base').filter({ hasText: 'fabindia men kurtas' })
  await page.locator('.SearchResultItem__base').first().waitFor({ state: 'visible' });
  await page.locator('.SearchResultItem__base').first().click();
 
  // page.getByRole('radio', { name: 'Kurta' }).first()
  // page.locator('[role="radio"]').filter({ hasText: 'Kurta' }).first()
  // page.locator('.FilterDesktop__newFilCheckboxBlock').nth(1)
  // page.locator('//div[@class="FilterDesktop__newFilName"][text()="Kurta"]')
  // page.locator('.FilterDesktop__newFilName').getByText('Kurta', { exact: true })
  // page.getByText('Kurta').first()
  // page.locator('.CheckBox__base').nth(1)
  await page.locator('.FilterDesktop__newFilCheckboxBlock').filter({ hasText: 'Kurta' }).nth(1).waitFor({ state: 'visible' });
  await page.locator('.FilterDesktop__newFilCheckboxBlock').filter({ hasText: 'Kurta' }).nth(1).click();
 
  // page.locator('.Grid__element').nth(1)
  // page.locator('.PlpComponent__base').filter({ hasText: 'Manyavar' }).first()
  // page.locator('.PlpComponent__base').nth(1).locator('[role="button"]')
  // page.locator('//div[@class="PlpComponent__base"][2]//div[@role="button"]')
  await page.locator('.PlpComponent__base').nth(1).waitFor({ state: 'visible' });
  await page.locator('.PlpComponent__base').nth(1).locator('.ProductModule__electronicViewButtonNew4By4').locator('[role="button"]').click();
 
  // page.getByRole('button', { name: 'Close' })
  // page.getByLabel('Close')
  // page.locator('//button[@aria-label="Close"]')
  await page.getByTitle('Close').waitFor({ state: 'visible' });
  await page.getByTitle('Close').click();
 
});
 