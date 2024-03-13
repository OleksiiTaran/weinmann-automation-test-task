import { test as base } from '@playwright/test'
import { loginPageModel } from '../models/login-page-model'
import { PersonalAccountModel } from '../models/personal-account-model'
import { ContactModel } from '../models/contact-model'

type pages = {
    loginPageView: loginPageModel
    personalAccountView: PersonalAccountModel
    contactView: ContactModel
}

export const test = base.extend<pages>({
    loginPageView: async ({ page }, use) => {
        await use(new loginPageModel(page))
    },
    personalAccountView: async ({ page }, use) => {
        await use(new PersonalAccountModel(page))
    },
    contactView: async ({ page }, use) => {
        await use(new ContactModel(page))
    }
})

export { expect } from '@playwright/test'