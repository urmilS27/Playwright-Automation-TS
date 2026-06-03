import { test, expect } from "@playwright/test";
 
test("Date Picker Event", async ({ page }) => {
  await page.goto("https://www.abhibus.com/");
 
  const fromInput = page.getByPlaceholder("Leaving From");
  await fromInput.click();
  await fromInput.fill("Ahmedabad");
  await page.getByText("Ahmedabad", { exact: true }).first().click();
 
  const toInput = page.getByPlaceholder("Going To");
  await toInput.click();
  await toInput.fill("Mumbai");
  await page.getByText("Mumbai", { exact: true }).first().click();
 
  await page.getByPlaceholder("Onward Journey Date").click();
 
  await page.getByRole("button", {name : "11" }).click();
 
  await page.locator("#search-container").getByRole("button", { name: "Search" }).click();
 
  await page.waitForTimeout(3000);
});

// Failed due to bot protection

// test("Multiple page Handler", async ({ browser }) => {
 
//     const context = await browser.newContext();
//     const page =await context.newPage();
 
//     await page.goto("https://www.geeksforgeeks.org/reactjs/next-js-playwright-testing/");
 
//     const pagePromise = context.waitForEvent("page");
//     await page.locator(`li[value="1"] a`).click();
//     const newPage = await pagePromise;
 
//     await newPage.waitForLoadState();
//     await newPage.locator('#ArticlePageMoreInfoNextArticleComponent_bottomCommentButton__O9Jyw').click();
 
//     const feedBackField = newPage.frameLocator('iframe#gfg_post_1107997_ifr').locator(`html`).locator(".mce-content-body ");
//     await feedBackField.fill("Well explaination");
//     await newPage.locator('.submit_btn').click();
//     await newPage.close();
 
//     await page.locator('#ArticlePageMoreInfoNextArticleComponent_bottomCommentButton__O9Jyw').click();
//     const feedBackField_2 = page.frameLocator('iframe#gfg_post_1284674_ifr').locator(`html`).locator(".mce-content-body ");
//     await feedBackField_2.fill("Well explaination");
//     await page.locator('.submit_btn').click();
 
//     await page.waitForTimeout(2000);
// });