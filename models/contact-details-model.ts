import { type Locator, type Page } from "@playwright/test";

export class ContactDetailsModel {
    readonly page: Page
    readonly contactHeader: Locator
    readonly addToFavoriteBtn: Locator
    readonly editContactBtn: Locator
    readonly deleteContactBtn: Locator


    constructor(page: Page) {
        this.page = page
        this.contactHeader = this.page.locator('//div[@id="contact"]//h1')
        this.addToFavoriteBtn = this.page.getByTestId('favorize-contact')
        this.editContactBtn = this.page.getByTestId('edit-contact')
        this.deleteContactBtn = this.page.getByTestId('delete-contact')
    }
}