import { test, expect } from '@playwright/test';
import { companiesPage } from '../pages/CompaniesPage';
import { companyDetails } from '../pages/SearchCompany';
import { comapnyCheckout } from '../pages/JobPage';
import { JobApply } from '../pages/JobApplyPage';

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
    const yctest = new companiesPage(page);

    await yctest.Baseurl();
    await yctest.userlogin();

    await yjob.joblinkpage();
    await page.waitForLoadState('domcontentloaded');

    await yjob.clearFilterC();

    await yjob.searchComp();
    await page.waitForLoadState('domcontentloaded');

    const companyPagePromise = page.waitForEvent('popup');
    await yjob.selectRole.first().click();

    const companyPage = await companyPagePromise;
    await companyPage.waitForLoadState('domcontentloaded');

    const companyTab = new comapnyCheckout(companyPage);

    const jobPagePromise = companyPage.waitForEvent('popup');
    await companyTab.viewRoleDetail.click();

    const jobPage = await jobPagePromise;
    await jobPage.waitForLoadState('domcontentloaded');

    const jobApply = new JobApply(jobPage);

    await jobApply.applynow();
    await jobApply.jobDesc();
    await jobApply.close();
})
