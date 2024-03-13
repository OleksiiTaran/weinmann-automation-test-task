import { test, expect } from "../fixtures/page-fixtures"
import { filterContactsParams } from "../test-parameters/filter-contacts-params"

test.beforeEach('Create bunch of contacts for filtering', async ({
    personalAccountView,
    loginPageView,
    contactView }) => {
    test.setTimeout(80000)
    const contactList = [
        {
            firstName: 'John',
            lastName: 'Wick'
        },
        {
            firstName: 'John',
            lastName: 'Dou'
        },
        {
            firstName: 'John',
            lastName: 'Mnemonic'
        },
        {
            firstName: 'Mike',
            lastName: 'Wick'
        },
        {
            firstName: 'Sarah',
            lastName: 'Wick'
        }
    ]
    await loginPageView.successLogin()

    for (let contact_item of contactList) {
        await personalAccountView.addNewContactBtn.click()
        await contactView.firstNameField.fill(contact_item.firstName)
        await contactView.lastNameField.fill(contact_item.lastName)
        await contactView.saveBtn.click()
        await contactView.page.waitForTimeout(1500)
    }
})

filterContactsParams.forEach((data, _) => {
    test(`${data.testName}`, async ({ personalAccountView }) => {
        test.setTimeout(80000)
        await personalAccountView.searchField.click()
        await personalAccountView.searchField.fill(data.filterString)
        await personalAccountView.page.waitForTimeout(3000)
        await expect(personalAccountView.navigationSidebar.locator('li')).toHaveCount(data.expectedCount)
    })
})