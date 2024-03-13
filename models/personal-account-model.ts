import { type Locator, type Page } from "@playwright/test";
import { ContactDetailsModel } from '../models/contact-details-model'

export class PersonalAccountModel {
    readonly page: Page
    readonly searchField: Locator
    readonly addNewContactBtn: Locator
    readonly signOutBtn: Locator
    readonly navigationSidebar: Locator
    readonly contactDetails: ContactDetailsModel
    readonly noContactsLabel: Locator

    constructor(page: Page) {
        this.page = page
        this.searchField = this.page.locator('#query')
        this.addNewContactBtn = this.page.getByTestId('new-contact')
        this.navigationSidebar = this.page.locator('nav')
        this.signOutBtn = this.page.getByTestId('signout')
        this.contactDetails = new ContactDetailsModel(this.page)
        this.noContactsLabel = this.page.locator('p').filter({ hasText: 'No contacts' })
    }
}