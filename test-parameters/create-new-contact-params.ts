interface createNewContact {
    testName: string
    firstName: string
    lastName: string
    twitter: string
    avatarUrl: string
    notes: string
}

export const createNewContactParams: createNewContact[] = [
    {
        testName: 'Add new empty contact',
        firstName: '',
        lastName: '',
        twitter: '',
        avatarUrl: '',
        notes: '',
    },
    {
        testName: 'Add new contact with empty First Name',
        firstName: '',
        lastName: 'Anderson',
        twitter: '@realmadrid',
        avatarUrl: 'https://gravatar.com/avatar/a825d8aaad3ddaf4fe195174410401f6?s=400&d=robohash&r=x',
        notes: 'Hello there'
    },
    {
        testName: 'Add new contact with empty lastName',
        firstName: 'Tomas',
        lastName: '',
        twitter: '@realmadrid',
        avatarUrl: 'https://gravatar.com/avatar/a825d8aaad3ddaf4fe195174410401f6?s=400&d=robohash&r=x',
        notes: 'Hello there'
    },
    {
        testName: 'Add new contact with invalid avatar URL',
        firstName: 'Tomas',
        lastName: 'Anderson',
        twitter: 'realmadrid',
        avatarUrl: 'someUrl',
        notes: 'Hello there'
    }

]

