import { expect, Locator, Page } from "@playwright/test";

export class comapnyCheckout{
    page: Page
    jobslink: Locator
    startupJob: Locator
    searchJob: Locator
    selectcontainer: Locator
    selectRole: Locator
    viewRoleDetail: Locator
    clearFilter: Locator

    constructor (page: Page){
        this.page=page;
        this.jobslink=page.getByRole("link", { name: "Startup Jobs"})
        this.startupJob=page.getByRole('link', { name: 'Find a job ›'})
        this.searchJob=page.getByRole('searchbox', { name: 'search' })
        this.selectcontainer=page.locator('.bg-beige-lighter.mb-5.rounded.pb-0')
        // this.viewjob=page.getByRole('link', { name: 'Staff Software Engineer', exact: true})
        // this.selectRole=page.getByRole('link', { name: 'Backend Engineer (India)' })
        this.selectRole=page.locator('img[alt="Uplane"]')
        // this.viewRoleDetail=page.getByRole('link', { name: 'AI Marketing Strategist Intern - Berlin / Remote (German Speaking)' })
        this.viewRoleDetail=page.getByRole('link', { name: 'Founding Engineer (Full-Stack)' })
        
        this.clearFilter=page.getByRole('link', { name: 'Clear filters' })
    }

    async joblinkpage(){
        await this.jobslink.click();
        await this.startupJob.click();
    }

    async clearFilterC(){
        await this.clearFilter.click(); 
    }

    async searchComp(){
        await this.searchJob.fill("Uplane")
    }

    async selectcompanies(){
        // This will be used when we want to locate with name of the role
        // await this.selectRole.first().click();
        //used when we want to locate with alt text of image or by the image
        await this.selectRole.first().click();
        await this.viewRoleDetail.click();

        // 
    }

}