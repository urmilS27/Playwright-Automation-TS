import { test, expect } from '@playwright/test';
import { companiesPage } from '../pages/CompaniesPage';
import { companyDetails } from '../pages/SearchCompany';
import { comapnyCheckout } from '../pages/Jobpage';
import { JobApply } from '../pages/JobApplypage';
import { JobFilters } from '../pages/components/JobFilters';

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
    // await yctest.userlogin();
    await ycomapnies.navComp();
    await ycomapnies.dropdown();
    await ycomapnies.batchfil();
    await ycomapnies.industryfil();
    await ycomapnies.hqfil();
    // await page.pause();
})

// Flow 2

test('Startup Companies', async ({ page }) => {

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

test('Startup Companies Flow with Filters', async ({ page }) => {

    const yjob = new comapnyCheckout(page);
    const yctest = new companiesPage(page);
    const filters = new JobFilters(page);

    await yctest.Baseurl();
    // await yctest.userlogin();
    await yjob.joblinkpage();
    await page.waitForLoadState('domcontentloaded');
    await yjob.clearFilterC();

    // await filters.selectCommitment('Full-time');
    await filters.selectRole('Engineering');
    await filters.selectJobType('Devops')
    await filters.selectCompanySize('10');
    await filters.selectIndustry('b2b');
    await filters.selectExperience('6');
    await filters.selectJobLocation('IN')
    await filters.selectRemote('Not');
    await filters.selectCompanyStage('Seed');
    await filters.enableInterviewProcess();

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
});


// After Filter apply if there is no company is being shown then remove all the filter and start filling the filters one by one and then count the companies and their name 
// if users has searched for the company and multiple companies are being showed then exact or same companies should be given there
// after clicking on the comapnies and on click of apply now there should be 