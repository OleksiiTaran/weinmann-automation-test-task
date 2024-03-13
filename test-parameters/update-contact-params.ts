interface updateContactInterface {
    testName: string
    newFirstName: string
    newLastName: string
}

export const updateContactParameters: updateContactInterface[] = [
    {
        testName: 'Update first name',
        newFirstName: 'Updated Name',
        newLastName: ''
    },
    {
        testName: 'Update last name',
        newLastName: 'Updated Lastname',
        newFirstName: ''
    },
    {
        testName: 'Update with first and last name',
        newLastName: 'Updated firstName',
        newFirstName: 'Updated lastName'
    },
    {
        testName: 'Update with empty firstname and lastname',
        newFirstName: '',
        newLastName: ''
    }
]