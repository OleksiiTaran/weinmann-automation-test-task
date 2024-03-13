import { type Locator, type Page } from "@playwright/test";

export class loginPageModel {
    readonly page: Page
    readonly usernameField: Locator
    readonly passwordField: Locator
    readonly loginBtn: Locator
    readonly errorMsg: Locator

    constructor(page: Page) {
        this.page = page
        this.usernameField = this.page.getByTestId('username')
        this.passwordField = this.page.getByTestId('password')
        this.loginBtn = this.page.getByTestId('signin')
        this.errorMsg = this.page.locator('.error')
    }

    async goTo() {
        await this.page.goto('/login')
    }

    async successLogin() {
        await this.page.goto('/login')
        await this.usernameField.fill(String(process.env.USERNAME))
        await this.passwordField.fill(String(process.env.PASSWORD))
        await this.loginBtn.click()
    }
}