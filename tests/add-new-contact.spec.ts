import { test, expect } from '../fixtures/page-fixtures'
import { createNewContactParams } from '../test-parameters/create-new-contact-params'


test.beforeEach(async ({ loginPageView }) => {
    await loginPageView.successLogin()
})

createNewContactParams.forEach((data, _) => {
    test(`${data.testName}`, async ({ contactView, personalAccountView, page }) => {
        await personalAccountView.addNewContactBtn.click()
        await contactView.firstNameField.fill(data.firstName)
        await contactView.lastNameField.fill(data.lastName)
        await contactView.twitterField.fill(data.twitter)
        await contactView.avatarUrlField.fill(data.avatarUrl)
        await contactView.notesField.fill(data.notes)
        await contactView.saveBtn.click()
        if (!data.firstName || !data.lastName) {
            await expect(personalAccountView.navigationSidebar).toContainText('No Name')
        }
        await expect(personalAccountView.navigationSidebar).toContainText(data.firstName || data.lastName || `${data.firstName} ${data.lastName}`)

    })
})