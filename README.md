# Phonebook

* Write an application for storing phone book contacts.

* The application should consist of a form and a list of contacts. In the current step, implement adding the contact name and displaying the contact list. The application should not store contacts between different sessions (page refreshes).

* Each contact must be an object with name and id properties. To generate identifiers, use any appropriate package, for example nanoid.

* Expand the functionality of the application by allowing users to add phone numbers.

* Add a search field that can be used to filter the list of contacts by name.

1. A search field is a formless input whose value is written to a state (controlled element).
2. The filtering logic must be case insensitive.

* If your application is implemented in one <App> component, refactor it by separating the relevant parts into separate components.

* Deny the user the ability to add contacts whose names are already in the phone book. When you try to perform such an action, display an alert with a warning.

* Expand the functionality of the application, allowing the user to delete previously saved contacts.
