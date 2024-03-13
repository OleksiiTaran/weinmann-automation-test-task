import { test, expect } from '../fixtures/page-fixtures'
import { signInParameters } from '../test-parameters/sign-in-params'


signInParameters.forEach((data, _) => {
    test(`${data.testName}`, async ({ loginPageView, personalAccountView }) => {
        await loginPageView.goTo()
        await loginPageView.usernameField.fill(data.username)
        await loginPageView.passwordField.fill(data.password)
        await loginPageView.loginBtn.click()
        if (data.expectedErrorMessage) {
            await expect(loginPageView.errorMsg).toHaveText(data.expectedErrorMessage)
        } else {
            await expect(personalAccountView.signOutBtn).toBeVisible()
        }
    })
})