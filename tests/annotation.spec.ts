import { test, expect } from '@playwright/test';

test.describe('IMDb Search Flow', () => {

  test.skip(({ browserName }) => browserName === 'webkit', 
    'IMDb behaves inconsistently on WebKit');

  test('complete flow from homepage to show detail with all assertions', async ({ page }) => {

    await page.goto('https://www.imdb.com', { timeout: 30000 });

    const title = page.locator('h1[data-testid="hero__pageTitle"]');
    await expect(page).toHaveTitle(/IMDb/);
    const logo = page.locator('a[aria-label="Home"]').first();
    await expect(logo).toBeVisible();
    const searchInput = page.locator('input[data-testid="suggestion-search"]');
    await expect(searchInput).toBeVisible();

    await searchInput.fill('The Boys');
    await expect(searchInput).toHaveValue('The Boys');
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/find/);

    const theBoysLink = page.locator('.ipc-metadata-list-summary-item').filter({ hasText: 'The Boys' })
      .first()
      .locator('a[href*="/title/tt"]')
      .first();

    await expect(theBoysLink).toBeVisible();
    await theBoysLink.click();

    await expect(page).toHaveURL(/title\/tt/, { timeout: 15000 });

    await expect(title).toBeVisible();
    await expect(title).toHaveText('The Boys');

    const rating = page.locator('[data-testid="hero-rating-bar__aggregate-rating__score"]').first();
    await expect(rating).toBeVisible();
    await expect(rating).not.toBeEmpty();
    const actionChip = page.locator('a.ipc-chip').filter({ hasText: 'Action' }).first();
    await expect(actionChip).toBeVisible();
    const comedyChip = page.locator('a.ipc-chip').filter({ hasText: 'Comedy' }).first();

    test.fixme(true, 'Comedy genre may not always be visible depending on IMDb layout/content changes');
    await expect(comedyChip).toBeVisible();

    const plot = page.locator('[data-testid="plot"]');
    await expect(plot).toBeVisible();
    await expect(plot).not.toBeEmpty();

    const castSection = page.locator('[data-testid="title-cast"]');
    await expect(castSection).toBeVisible();
    const castMembers = page.locator('[data-testid="title-cast-item"]');
    await expect(castMembers.first()).toBeVisible();
  });

  // Annotation - skip
  test.skip('Prime Video CTA validation', async ({ page }) => {
    await page.goto('https://www.imdb.com/title/tt1190634/');
    const primeVideo = page.locator('a[aria-label*="Prime Video"], img[alt*="Prime Video"]').first();
    await expect(primeVideo).toBeVisible();
  });

  // Annotation - only 
//   test.only('debug search input only', async ({ page }) => {
//     await page.goto('https://www.imdb.com');
//     await expect(page.locator('input[data-testid="suggestion-search"]')).toBeVisible();
//   });

});