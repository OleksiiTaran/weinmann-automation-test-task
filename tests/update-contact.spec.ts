import { test, expect } from "../fixtures/page-fixtures";
import { updateContactParameters } from "../test-parameters/update-contact-params";

test.beforeEach('Create account to edit', async ({ loginPageView, personalAccountView, contactView }) => {
    await loginPageView.successLogin()
    await personalAccountView.addNewContactBtn.click()
    await contactView.firstNameField.fill('John')
    await contactView.lastNameField.fill('Dou')
    await contactView.saveBtn.click()
})

updateContactParameters.forEach((data, _) => {
    test(`${data.testName}`, async ({ personalAccountView, contactView }) => {
        await personalAccountView.page.getByRole('link', { name: 'John Dou' }).click()
        await personalAccountView.contactDetails.editContactBtn.click()
        await contactView.firstNameField.fill(data.newFirstName)
        await contactView.lastNameField.fill(data.newLastName)
        await contactView.saveBtn.click()
        if (data.newFirstName === '' && data.newLastName === '') {
            await expect(personalAccountView.navigationSidebar).toHaveText('No Name')
        }
        else if (data.newFirstName === '') {
            if (data.newLastName !== '') {
                await expect(personalAccountView.navigationSidebar).toHaveText(data.newFirstName || data.newLastName)
            }
        }
        else {
            await expect(personalAccountView.navigationSidebar).toHaveText(`${data.newFirstName} ${data.newLastName}`)
        }
    })
})