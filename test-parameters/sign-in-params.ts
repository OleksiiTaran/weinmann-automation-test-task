interface signInInterface {
    testName: string
    username: string
    password: string
    expectedErrorMessage?: string
}


export const signInParameters: signInInterface[] = [
    {
        testName: 'Sign in without credentials',
        username: '',
        password: '',
        expectedErrorMessage: 'You must provide a username to log in'
    },
    {
        testName: 'Sign in with empty username field',
        username: '',
        password: String(process.env.PASSWORD),
        expectedErrorMessage: 'You must provide a username to log in'
    },
    {
        testName: 'Sign in with empty password field',
        username: String(process.env.USERNAME),
        password: '',
        expectedErrorMessage: 'You must provide a password to log in'
    },
    {
        testName: 'Success sign in',
        username: String(process.env.USERNAME),
        password: String(process.env.PASSWORD)
    }
]