interface filterContactsInterface {
    testName: string
    filterString: string
    expectedCount: number
}

export const filterContactsParams: filterContactsInterface[] = [
    {
        testName: 'Filter by Last name (Wick)',
        filterString: 'Wick',
        expectedCount: 3,
    },
    {
        testName: 'Filter by First name (John)',
        filterString: 'John',
        expectedCount: 3,
    },
    {
        testName: 'Filter by uniq last name (Mnemonic)',
        filterString: 'Mnemonic',
        expectedCount: 1,
    },
    {
        testName: 'Filter by uniq first name (Sarah)',
        filterString: 'Sarah',
        expectedCount: 1,
    }
]