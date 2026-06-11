import { test, expect } from '@playwright/test';
import { companiesPage } from '../pages/CompaniesPage';
import { companyDetails } from '../pages/SearchCompany';
import { comapnyCheckout } from '../pages/JobPage';

test('Search company',async ({ page }) => {
     
    const yctest = new companiesPage( page );
    const ycomapnies = new companyDetails( page );

    await yctest.Baseurl();
    await yctest.userlogin();
    await ycomapnies.navComp();
    await ycomapnies.search("open AI");
    // await page.pause();
})

test('Filter companies', async ({ page }) => {

    const yctest = new companiesPage( page );
    const ycomapnies = new companyDetails( page );
    
    await yctest.Baseurl();
    await yctest.userlogin();
    await ycomapnies.navComp();
    await ycomapnies.dropdown();
    await ycomapnies.batchfil();
    await ycomapnies.industryfil();
    await ycomapnies.hqfil();
    // await page.pause();
})

// Flow 2

test.only('Startup Companies', async ({ page }) => {
    const yjob = new comapnyCheckout(page);
    const yctest = new companiesPage( page ); 
    await yctest.Baseurl();
    await yctest.userlogin();
    await yjob.joblinkpage();
    await page.waitForLoadState('domcontentloaded')
    await yjob.selectcompanies();
    // await page.pause();

    const newPagePromise = page.waitForEvent('popup');
    const newPage = await newPagePromise;

    await newPage.waitForLoadState('domcontentloaded');

    const companyTab = new comapnyCheckout(newPage);

    await companyTab.applynow();

    await newPage
        .getByPlaceholder(
            "Hi! My name is Urmil Sakariya and here's a little bit about me and what I'm looking for..."
        )
        .fill("Urmil Sakariya");

    await newPage.pause();

    await newPage.getByRole('button', { name: 'Close' }).click();

})
