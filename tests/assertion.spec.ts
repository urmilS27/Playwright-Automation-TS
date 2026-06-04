import { test, expect } from '@playwright/test';

test('Ycombinator', async ({ page }) => {
    await page.goto('https://www.ycombinator.com/')
})

test('imdb', async ({ page }) => {
    await page.goto('https://www.imdb.com/')
})

test('complete flow from homepage to show detail with all assertions', async ({ page }) => {

    await page.goto('https://www.imdb.com');

    const title = page.locator('h1[data-testid="hero__pageTitle"]');
    await expect(page).toHaveTitle(/IMDb/);
    await expect(page).toHaveURL('https://www.imdb.com/');

    const logo = page.locator('a[aria-label="Home"]').first();
    await expect(logo).toBeVisible();
    await expect(logo).toHaveAttribute('href');

    const searchInput = page.locator('input[data-testid="suggestion-search"]');
    await expect(searchInput).toBeVisible();
    await expect(searchInput).toBeEnabled();
    await expect(searchInput).toHaveAttribute('placeholder', 'Search IMDb');
    await expect(searchInput).toHaveAttribute('name', 'q');
    await expect(searchInput).toHaveValue('');

    await searchInput.click();

    const suggestionContainer = page.locator('#suggestion-search-container');
    await expect(suggestionContainer).toBeVisible();

    const popularSearches = page.locator('text=POPULAR SEARCHES');
    await expect(popularSearches).toBeVisible();

    const suggestions = page.locator('.react-autosuggest__suggestion').first();
    await suggestions.waitFor();
    await expect(suggestions).toBeVisible();

    await searchInput.fill('The Boys');
    await expect(searchInput).toHaveValue('The Boys');
    await expect(searchInput).not.toHaveValue('');

    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/find/);
    await expect(page).toHaveURL(/The\+Boys|The%20Boys/);

    const firstResult = page.locator('.ipc-metadata-list-summary-item').first();
    await firstResult.waitFor();
    await expect(firstResult).toBeVisible();

    const theBoysLink = page.locator('.ipc-metadata-list-summary-item').filter({ hasText: 'The Boys' }).first().locator('a[href*="/title/tt"]').first();
    await expect(theBoysLink).toBeVisible();
    await expect(theBoysLink).toHaveAttribute('href', /\/title\/tt/);
    await theBoysLink.click();

    await expect(page).toHaveURL(/title\/tt/, { timeout: 15000 });

    await expect(title).toBeVisible();
    await expect(title).toHaveText('The Boys');
    await expect(title).not.toHaveText('');

    const rating = page.locator('[data-testid="hero-rating-bar__aggregate-rating__score"]').first();
    await expect(rating).toBeVisible();
    await expect(rating).not.toBeEmpty();

    const firstChip = page.locator('a.ipc-chip').first();
    await firstChip.waitFor();
    await expect(firstChip).toBeVisible();

    const actionChip = page.locator('a.ipc-chip').filter({ hasText: 'Action' }).first();
    await expect(actionChip).toBeVisible();
    await expect(actionChip).toHaveAttribute('href');

    const comedyChip = page.locator('a.ipc-chip').filter({ hasText: 'Comedy' }).first();
    await expect(comedyChip).toBeVisible();
    await expect(comedyChip).toHaveAttribute('href');

    const plot = page.locator('[data-testid="plot"]');
    await expect(plot).toBeVisible();
    await expect(plot).not.toBeEmpty();

    const karlUrban = page.locator('a[href*="name"]').filter({ hasText: 'Karl Urban' }).first();
    await expect(karlUrban).toBeVisible();
    await expect(karlUrban).toHaveAttribute('href', /name/);

    const jackQuaid = page.locator('a[href*="name"]').filter({ hasText: 'Jack Quaid' }).first();
    await expect(jackQuaid).toBeVisible();
    await expect(jackQuaid).toHaveAttribute('href', /name/);

    const antonyStarr = page.locator('a[href*="name"]').filter({ hasText: 'Antony Starr' }).first();
    await expect(antonyStarr).toBeVisible();
    await expect(antonyStarr).toHaveAttribute('href', /name/);

    const primeVideo = page.locator('a[aria-label*="Prime Video"], img[alt*="Prime Video"]').first();
    await expect(primeVideo).toBeVisible();

    const watchlistButton = page.locator('button').filter({ hasText: /Add to Watchlist/i }).first();
    await expect(watchlistButton).toBeVisible();
    await expect(watchlistButton).toBeEnabled();

    const markAsWatched = page.locator('text=Mark as watched');
    await expect(markAsWatched).toBeVisible();

    const videos = page.locator('text=99+ VIDEOS');
    await expect(videos).toBeVisible();

    const photos = page.locator('text=99+ PHOTOS');
    await expect(photos).toBeVisible();

    const castSection = page.locator('[data-testid="title-cast"]');
    await expect(castSection).toBeVisible();

    const castMembers = page.locator('[data-testid="title-cast-item"]');
    await castMembers.first().waitFor();
    await expect(castMembers.first()).toBeVisible();

    const moreLikeThis = page.locator('[data-testid="shoveler"]').first();
    await expect(moreLikeThis).toBeVisible();

});
