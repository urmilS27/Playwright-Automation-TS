import { test, expect } from '@playwright/test';
import { companiesPage } from '../pages/CompaniesPage';
import { companyDetails } from '../pages/SearchCompany';


test('Search company',async ({ page }) => {
     
    
    const yctest = new companiesPage( page );
    const ycomapnies = new companyDetails( page );

    await yctest.Baseurl();
    await yctest.userlogin();
    await ycomapnies.navComp();
    await ycomapnies.search("open AI");
    // await page.pause();
    
})

test.only('Filter companies', async ({ page }) => {

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