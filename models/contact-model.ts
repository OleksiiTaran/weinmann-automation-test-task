import { type Locator, type Page } from "@playwright/test";

export class ContactModel {
    readonly page: Page
    readonly firstNameField: Locator
    readonly lastNameField: Locator
    readonly twitterField: Locator
    readonly avatarUrlField: Locator
    readonly notesField: Locator
    readonly saveBtn: Locator
    readonly cancelBtn: Locator

    constructor(page: Page) {
        this.page = page
        this.firstNameField = this.page.getByTestId('first')
        this.lastNameField = this.page.getByTestId('last')
        this.twitterField = this.page.getByTestId('twitter')
        this.avatarUrlField = this.page.getByTestId('avatar')
        this.notesField = this.page.getByTestId('notes')
        this.saveBtn = this.page.getByTestId('save-contact')
        this.cancelBtn = this.page.getByTestId('cancel-contact')
    }

    async goTo() {
        await this.page.goto('/')
    }
}