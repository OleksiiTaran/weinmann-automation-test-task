1. Search field doesn't work with spaces (only one entry is working on search)
    - Search by first name
    - search by last name
    - search the both (not working)

2. Create user immediately after clickin on New button
    - Should create only when all needed entry added and Save button pressed

3. Cancel button is not removing the contact
    - Cancel button just closes the add contact dialog (should delete user instead)

4. There no any validation for create a contact fields
    - User can enter any url for image (Should be at least valiation for protocol)

5. User can create empty and dublicted contacts
    - For me, as for user it is very weird behavior. Must be present at least one required field (First name for example)
    - For dublicates, it should be described, or system should automatically add some ID to duplicates  
    - Due to absence of validation during creating new contact, I wasn't be able to create some of negative automation cases for creting new user, because there are not any restictions, so I could only preetend, that there are some of problems

6. Found really strange behaviour with 'no name' contact name
    - Create a contact with name 'no name', 'new name', 'last name'
    - In search field type char 'n' and press space button -> no name is shown as a search result
    - Remove all chats, and press space key again -> no name is shown as a search result

7. When contact is selected after the search, all contacts are shown in the sidebar (I expected that only found after search contact will be selected)

8. Also there is one security concern, when user trying to login with empty username or password fields, systems shows the error message (what is correct) but there is present name and password that can be used to get the access. (I make these tests failed intentionaly, and removed all credentials from the error message check)

Also I've pushed this test task to the github, where I have set up the GitHub actions workflow that is running all these tests, and generating brief report.  
You can check it by this link:  
    - https://github.com/OleksiiTaran/weinmann-automation-test-task/actions/workflows/playwright-tests.yml

I made these tests executing on all browsers (Chrome, Firefox, Safari) in headless mode