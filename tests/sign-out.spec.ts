import { test, expect } from '../fixtures/page-fixtures'

test('Sign out', async ({ personalAccountView, loginPageView }) => {
    await loginPageView.successLogin()
    await personalAccountView.signOutBtn.click()
    await expect(loginPageView.usernameField).toBeVisible()
    await expect(loginPageView.passwordField).toBeVisible()
    await expect(loginPageView.loginBtn).toBeVisible()
    await expect(loginPageView.loginBtn).toBeEnabled()
})