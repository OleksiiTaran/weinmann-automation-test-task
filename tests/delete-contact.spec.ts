import { test, expect } from "../fixtures/page-fixtures"

test.beforeEach('Create account to delete', async ({ loginPageView, personalAccountView, contactView }) => {
    await loginPageView.successLogin()
    await personalAccountView.addNewContactBtn.click()
    await contactView.firstNameField.fill('John')
    await contactView.lastNameField.fill('Dou')
    await contactView.saveBtn.click()
})

test('Delete the contact', async ({ personalAccountView, page }) => {

    page.on('dialog', async dialog => {
        await dialog.accept()
    })
    await personalAccountView.page.getByRole('link', { name: 'John Dou' }).click()
    await personalAccountView.contactDetails.deleteContactBtn.click()
    await expect(personalAccountView.noContactsLabel).toBeVisible()
})