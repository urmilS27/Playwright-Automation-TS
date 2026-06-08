import { test, expect } from '@playwright/test';

test.describe('IMDb - Search to Title Detail Flow', () => {

  test.beforeAll(async () => {
    console.log('Starting IMDb test suite');
  });


  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.imdb.com/');
    await expect(page).toHaveTitle(/IMDb/);
    await expect(page).toHaveURL(/imdb\.com/);
  });

  test('homepage search UI should be visible', async ({ page }) => {
    test.info().annotations.push({
      type: 'area',
      description: 'Homepage search validation'
    });

    const logo = page.locator('a[aria-label="Home"]').first();
    await expect(logo).toBeVisible();
    await expect(logo).toHaveAttribute('href');

    const searchInput = page.locator('input[data-testid="suggestion-search"]');
    await expect(searchInput).toBeVisible();
    await expect(searchInput).toBeEnabled();
    await expect(searchInput).toHaveAttribute('placeholder', 'Search IMDb');
    await expect(searchInput).toHaveAttribute('name', 'q');
    await expect(searchInput).toHaveValue('');
  });

  test('search The Boys and open title detail page', async ({ page }) => {
    test.info().annotations.push({
      type: 'risk',
      description: 'Search result navigation may break due to dynamic IMDb layout'
    });

    const searchInput = page.locator('input[data-testid="suggestion-search"]');

    await searchInput.fill('The Boys');
    await page.keyboard.press('Enter');

    await expect(page).toHaveURL(/find/);
    await expect(page).toHaveURL(/The\+Boys|The%20Boys/);

    const theBoysLink = page
      .locator('.ipc-metadata-list-summary-item')
      .filter({ hasText: 'The Boys' })
      .first()
      .locator('a[href*="/title/tt"]')
      .first();

    await expect(theBoysLink).toBeVisible();
    await theBoysLink.click();

    await expect(page).toHaveURL(/title\/tt/, { timeout: 15000 });

    const title = page.locator('h1[data-testid="hero__pageTitle"]');
    await expect(title).toBeVisible();
    await expect(title).toHaveText('The Boys');
  });

  test('title detail page should show rating, genre, plot and cast', async ({ page }) => {
    test.slow();

    await page.goto('https://www.imdb.com/title/tt1190634/');

    const rating = page.locator('[data-testid="hero-rating-bar__aggregate-rating__score"]').first();
    await expect(rating).toBeVisible();
    await expect(rating).not.toBeEmpty();

    await expect(page.locator('a.ipc-chip').filter({ hasText: 'Action' }).first()).toBeVisible();
    await expect(page.locator('a.ipc-chip').filter({ hasText: 'Comedy' }).first()).toBeVisible();

    const plot = page.locator('[data-testid="plot"]');
    await expect(plot).toBeVisible();
    await expect(plot).not.toBeEmpty();

    await expect(page.locator('a[href*="name"]').filter({ hasText: 'Karl Urban' }).first()).toBeVisible();
    await expect(page.locator('a[href*="name"]').filter({ hasText: 'Jack Quaid' }).first()).toBeVisible();
    await expect(page.locator('a[href*="name"]').filter({ hasText: 'Antony Starr' }).first()).toBeVisible();

    await expect(page.locator('[data-testid="title-cast"]')).toBeVisible();
  });

  test.afterAll('Completed test suits', async () =>{
    console.log('Execution Completed');
  })
});