import { Locator, Page, expect } from "@playwright/test";
import { companiesPage } from "./CompaniesPage"; 
import  testdata  from "../testdata/testdata.json" ;

export class companyDetails{
    page: Page 
    searchBox: Locator;
    companies: Locator;
    batchfilter: Locator;
    industryfilter: Locator;
    hqfilter: Locator;
    slider:Locator;
    dropdownsel: Locator;

    constructor(page: Page){
        this.page =page;
        this.searchBox = page.getByPlaceholder('Search...')
        this.companies= page.locator('//a[text()="Companies"]')
        // this.batchfilter= page.getByRole('checkbox', { name : `${testdata.filters.batchfilter}`})
        this.batchfilter= page.getByLabel(`${testdata.filters.batchfilter}`)
        // this.industryfilter=page.getByRole('checkbox', { name : `${testdata.filters.industryfilter}`})
        this.industryfilter= page.getByLabel(`${testdata.filters.industryfilter}`)
        // this.hqfilter=page.getByRole('checkbox', { name : `${testdata.filters.hqfilter}`})
        this.hqfilter= page.getByLabel(`${testdata.filters.hqfilter}`)

        this.slider=page.getByRole('slider')
        this.dropdownsel=page.locator('select')
    }

    async navComp(){
        await this.companies.click()
    }
    async dropdown(){
        await this.dropdownsel.selectOption( { index : 1})
    }
    async search(companyName: string){
        await this.searchBox.click()
        await this.searchBox.fill(`${companyName}`)
    }
    async batchfil(){
        await this.batchfilter.check();
    }
    async industryfil(){
        await this.industryfilter.check();
    }
    async hqfil(){
        await this.hqfilter.check();
    }
}