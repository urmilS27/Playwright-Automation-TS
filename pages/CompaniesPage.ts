import { Locator, expect, Page } from "@playwright/test";
import  testdata  from "../testdata/testdata.json" ;

export class companiesPage{
    page: Page;
    login:Locator;
    username: Locator;
    password:Locator;
    submitbtn: Locator;


    constructor(page: Page){
        this.page = page
        this.login = page.getByRole('link', { name : 'Log in' })
        this.username =page.locator('//input[@id="ycid-input"]')
        this.password=page.locator('//input[@id="password-input"]')
        this.submitbtn =page.getByRole('button', {name : 'Log in'})
    }

    async Baseurl(){
        await this.page.goto('https://www.ycombinator.com/', {timeout : 50000});
    }
    async userlogin(){
        await this.login.click();
        await this.username.fill('urmil3727');
        await this.password.fill('URMILsakariya5329@#@')
        await this.submitbtn.click();
    }
}

