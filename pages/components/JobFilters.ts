import { Page, Locator } from '@playwright/test';

export class JobFilters {
  page: Page;
  Filcommitment: Locator;
  FilRole: Locator;
  FilCompanySize: Locator;
  FilIndustry: Locator;
  FilExp: Locator;
  FilRemote: Locator;
  FilCompanyStage: Locator;
  salaryCheckBox: Locator;
  JobLoc: Locator;
  JobType: Locator;

  constructor(page: Page) {
    this.page = page;
    this.Filcommitment = page.locator('#react-select-2-input');
    this.FilRole = page.locator('#react-select-3-input');
    this.JobType = page.locator('div').filter({ hasText: /^Any$/ }).nth(2);
    this.FilCompanySize = page.locator('#react-select-5-input');
    this.FilIndustry = page.locator('#react-select-6-input');
    this.FilExp = page.locator('#react-select-7-input');
    this.JobLoc = page.getByPlaceholder('Search ...');
    this.FilRemote = page.locator('#react-select-8-input');
    this.FilCompanyStage = page.locator('#react-select-9-input');
    this.salaryCheckBox = page.getByLabel('Has interview process');
  }

  private async selectDropdown(locator: Locator, value: string) {
    await locator.fill(value);
    await this.page.keyboard.press('Enter');
  }

  async selectCommitment(value: string) {
    await this.selectDropdown(this.Filcommitment, value);
  }

  async selectRole(value: string) {
    await this.selectDropdown(this.FilRole, value);
  }

  async selectJobType(value: string) {
    await this.JobType.click();
    await this.page.getByText(value, { exact: true }).click();
  }

  async selectCompanySize(value: string) {
    await this.selectDropdown(this.FilCompanySize, value);
  }

  async selectIndustry(value: string) {
    await this.selectDropdown(this.FilIndustry, value);
  }

  async selectExperience(value: string) {
    await this.selectDropdown(this.FilExp, value);
  }

  async selectJobLocation(value: string) {
    await this.JobLoc.fill(value);
    await this.page.keyboard.press('Enter');
  }

  async selectRemote(value: string) {
    await this.selectDropdown(this.FilRemote, value);
  }

  async selectCompanyStage(value: string) {
    await this.selectDropdown(this.FilCompanyStage, value);
  }

  async enableInterviewProcess() {
    await this.salaryCheckBox.check();
  }
}