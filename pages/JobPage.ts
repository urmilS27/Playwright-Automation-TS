import { expect, Locator, Page } from "@playwright/test";

export class comapnyCheckout{
    page: Page
    jobslink: Locator
    startupJob: Locator
    searchJob: Locator
    selectcontainer: Locator
    selectRole: Locator
    applybtn: Locator

    constructor (page: Page){
        this.page=page;
        this.jobslink=page.getByRole("link", { name: "Startup Jobs"})
        this.startupJob=page.getByRole('link', { name: 'Find a job ›'})
        this.searchJob=page.getByPlaceholder('Search by job title, tech stack, company name...')
        this.selectcontainer=page.locator('.bg-beige-lighter.mb-5.rounded.pb-0')
        // this.viewjob=page.getByRole('link', { name: 'Staff Software Engineer', exact: true})
        this.applybtn=page.getByText('Apply', { exact: true })
        this.selectRole=page.getByRole('link', { name: 'Backend Engineer (India)' })
    }
    async joblinkpage(){
        await this.jobslink.click();
        await this.startupJob.click();
    }

    async selectcompanies(){
        // await this.selectcontainer.getByRole('link', { name: 'View job', exact: true}).first();
        // await this.selectcontainer.click();
        await this.selectRole.first().click();

    }

    async applynow(){
        await this.applybtn.first().click();
    }
}