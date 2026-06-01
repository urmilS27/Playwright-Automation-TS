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
    // await page.getByTestId('btn-disabled');
    // await expect(page.locator('#btn-output')).toHaveText('✓ Disabled button clicked!');
    await page.getByTestId('btn-enable-trigger').click();
    await page.getByTestId('btn-delayed').click();
    await expect(page.locator('#btn-output')).toHaveText('✓ Delayed button clicked!');
    await page.getByTestId('btn-text-change').click();
    await expect(page.locator('#btn-output')).toHaveText('Button text: "✓ Text Changed!"');
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

test('Drop down selection', async ({page }) => {
    await page.goto('https://qaplayground.vercel.app/');
    await page.getByTestId('sel-country').selectOption('in');
    await expect(page.locator('#dropdown-output')).toHaveText("Selected: in");
    await page.getByText('Select Framework ▾').click();
    await page.getByTestId('custom-dropdown').getByRole('option', { name: 'Playwright' }).click();
    await expect(page.locator('#dropdown-output')).toHaveText("Custom dropdown selected: Playwright (value: playwright)");
    await page.getByTestId('sel-skills').selectOption('Playwright');
    await expect(page.locator('#dropdown-output')).toHaveText("Multi-select: Playwright");
    await page.getByTestId('btn-load-dropdown').click();
    await page.getByTestId('sel-dynamic').selectOption('Option Alpha');
    await expect(page.locator('#dropdown-output')).toHaveText("Dynamic dropdown loaded with 5 options");
});

test('Unique locators', async ({ page }) => {
    await page.goto('https://qaplayground.vercel.app/');
    await expect(page.locator('#loc-by-id')).toHaveText("Locate by ID: #loc-by-id");
    await expect(page.locator('.node.node-class.unique-class-locator')).toHaveText("Locate by class: .unique-class-locator");
    await expect(page.getByPlaceholder("Locate by name='locatorByName'")).toHaveAttribute('id', 'input-by-name');
    await expect(page.getByTestId('specific-test-id')).toHaveText("Locate by data-testid: [data-testid='specific-test-id']");
    await expect(page.locator('[aria-label="unique-aria-target"]')).toHaveText("Locate by aria-label: [aria-label='unique-aria-target']");
    await expect(page.getByPlaceholder('unique-placeholder-string')).toHaveAttribute('id', 'input-by-placeholder');
});

test('XPath text verification at each level', async ({ page }) => {
    await page.goto('https://qaplayground.vercel.app/');

    await expect(page.locator("(//ul[@id='level-1']/li[@data-level='1'])[1]")).toContainText('Level 1 — Item A');
    await expect(page.locator("(//ul[@id='level-2a']/li[@data-level='2'])[1]")).toContainText('Level 2 — Item A1');
    await expect(page.locator("(//ul[@id='level-3a']/li[@data-level='3'])[1]")).toContainText('Level 3 — Item A1a');

    await expect(page.locator("//li[@id='deep-target']")).toContainText('Deep Target');
    await expect(page.locator("//li[@id='deep-sibling']")).toContainText('Sibling of deep target');
    
    await expect(page.locator("(//ul[@id='level-3a']/li[@data-level='3'])[2]")).toContainText('Level 3 — Item A1b');
    await expect(page.locator("//li[@id='l2-second']")).toContainText('Level 2 — Item A2');
    await expect(page.locator("(//ul[@id='level-1']/li[@data-level='1'])[2]")).toContainText('Level 1 — Item B');
    await expect(page.locator("//li[contains(@class,'l2-item') and contains(.,'Level 2 — Item B1')]")).toContainText('Level 2 — Item B1');
    await expect(page.locator("//li[contains(@class,'leaf') and contains(.,'Leaf B1')]")).toContainText('Leaf B1');
});

