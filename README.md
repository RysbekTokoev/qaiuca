# qaiuca
 Final work on QA Introduction course


#  Test cases
0. Pagination elements layout test
2. Change pages by using arrows
3. Change pages by clicking on a number
4. Does the empty(dots) appear
5. Change number of rows in the table

# Structure
cypress/pages - pages for PageObject
cypress/e2e - test specs
cypress/support - e2e support file + login method
root - config files

# Page object
Page object architecture allows us to easily check any updates of the elements and pages what also increases efficency, scalability, sustainability of the tests

# Usage
Dependencies: Cypress, cypress-xpath. To install dependecies
```angular2html
npm install
```
To open cypress ui runner 
```
npx cypress open
```
Note that before running the tests you need to update login and password parameters from cypress.config.js file

# Contacts
Rysbek Tokoev \
[rysbek@tokoev.com](mailto:rysbek@tokoev.com) \
[Linkedin](https://www.linkedin.com/in/rysbek-tokoev-44197919a/) \
[Facebook](https://www.facebook.com/tokoevr/)
