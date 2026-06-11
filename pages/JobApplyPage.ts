import { Page, Locator, expect } from "@playwright/test"

export class JobApply{
    page: Page
    applybtn: Locator
    jobdesc:Locator
    closebtn: Locator
    submitbtn: Locator


    constructor(page: Page){
        this.page=page;
        this.applybtn=page.getByText('Apply', { exact: true })
        this.jobdesc=page.getByPlaceholder("Hi! My name is Urmil Sakariya and here's a little bit about me and what I'm looking for...")
        this.closebtn=page.getByRole('button', { name: 'Close' })
        this.submitbtn=page.getByRole('button', { name: 'Submit'})
    }

    async jobDesc(){
        await this.jobdesc.fill("Urmil Sakariya, QA engineer");
    }

    async applynow(){
        await this.applybtn.first().click();
    }

    async close(){
        await this.closebtn.click();
    }

    async submit(){
        await this.submitbtn.click();

    }
}