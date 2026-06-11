# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: yc.spec.ts >> Startup Companies
- Location: tests/yc.spec.ts:36:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Startup Jobs' })
    - waiting for" https://www.ycombinator.com/" navigation to finish...
    - navigated to "https://www.ycombinator.com/"

```

# Test source

```ts
  1  | import { expect, Locator, Page } from "@playwright/test";
  2  | 
  3  | export class comapnyCheckout{
  4  |     page: Page
  5  |     jobslink: Locator
  6  |     startupJob: Locator
  7  |     searchJob: Locator
  8  |     selectcontainer: Locator
  9  |     selectRole: Locator
  10 |     viewRoleDetail: Locator
  11 |     clearFilter: Locator
  12 | 
  13 |     constructor (page: Page){
  14 |         this.page=page;
  15 |         this.jobslink=page.getByRole("link", { name: "Startup Jobs"})
  16 |         this.startupJob=page.getByRole('link', { name: 'Find a job ›'})
  17 |         this.searchJob=page.getByRole('searchbox', { name: 'search' })
  18 |         this.selectcontainer=page.locator('.bg-beige-lighter.mb-5.rounded.pb-0')
  19 |         // this.viewjob=page.getByRole('link', { name: 'Staff Software Engineer', exact: true})
  20 |         // this.selectRole=page.getByRole('link', { name: 'Backend Engineer (India)' })
  21 |         this.selectRole=page.locator('img[alt="Uplane"]')
  22 |         // this.viewRoleDetail=page.getByRole('link', { name: 'AI Marketing Strategist Intern - Berlin / Remote (German Speaking)' })
  23 |         this.viewRoleDetail=page.getByRole('link', { name: 'Founding Engineer (Full-Stack)' })
  24 |         
  25 |         this.clearFilter=page.getByRole('link', { name: 'Clear filters' })
  26 |     }
  27 | 
  28 |     async joblinkpage(){
> 29 |         await this.jobslink.click();
     |                             ^ Error: locator.click: Test timeout of 30000ms exceeded.
  30 |         await this.startupJob.click();
  31 |     }
  32 | 
  33 |     async clearFilterC(){
  34 |         await this.clearFilter.click(); 
  35 |     }
  36 | 
  37 |     async searchComp(){
  38 |         await this.searchJob.fill("Uplane")
  39 |     }
  40 | 
  41 |     async selectcompanies(){
  42 |         // This will be used when we want to locate with name of the role
  43 |         // await this.selectRole.first().click();
  44 |         //used when we want to locate with alt text of image or by the image
  45 |         await this.selectRole.first().click();
  46 |         await this.viewRoleDetail.click();
  47 |     }
  48 | 
  49 | }
```