# Deliverble 1
### Front-End

## Introduction
- - - -
The purpose of this deliverable is to apply all the techniques and best practices covered during the front-end workshops provided by Wizeline. In this repository you will find the scripts for executing the tests of [todoist](https://todoist.com/) on Windows environment.

## Tech stack
- - - -
- Javascript
- Testcafe

## Project structure
```
├── ...                  
├── pom                   # Main Page Object Model folder
    ├── components        # Navbar and sidebar
    ├── data              # Constants and roles
    ├── pages             # All files per screen
    ├── tests             # Test files
    └── utils             # Utils to reuse
├── .env 
├── .gitignore
├── .testcaferc.json
├── package.json
├── README.md     
```
## Pre-requisites
- - - -
- Node.js
- Browsers: Chrome and Firefox

## Project Setup
- - - -
1. Clone this repository.
2. Go to the repository folder.
3. Run 
```
   npm install
```
4. Create a .env file with the following variables:
```
TODOIST_URL=webside_url/
EMAIL_USER=your@email.com
PASSWORD=your_password
```

## Dependencies
- - - -
- testcafe
- dotenv
- eslint
- eslint-plugin-testcafe
- faker
- moment
- testcafe-reporter-allure

## How to use the test scripts
- - - -
1. To run smoke testing, execute:
```
npm run smoke-testing
```
> It will run the following tests on Chrome browser:
>
>* As a User I should be able to Login successfully
>* As a user I should be able to create a single task with today due date
>* As a user I should be able to create a new project

2. To run log in fixture, execute:
```
npm run login-f-test
```
> It will run the following test cases on Chrome browser:
>
>* 1.Successful login. Define a test case that performs a successful login, using
   credentials stored in a .env file.
>* 2.Unsuccessful login. Define at least 3 negative scenarios for the login. Reuse
   the same function for all the scenarios (positive and negative).

3. To run task fixture, execute:
```
npm run task-f-test
```
> It will run the following test cases on Chrome browser:
>
>* 3.Create a new task with Today as the due date and validate it was created
   correctly.
>* 4.Create a single task selecting tomorrow as the due date and validate it was
      created correctly.
>* 5.Create 10 new tasks with Today as the due date and validate they were
      created correctly. Task Names should be dynamic.
>* 7.Delete every task created (if there’s any) after your tests.This is a hook.


4. To run project fixture, execute:
```
npm run project-f-test
```
> It will run the following test cases on Chrome browser:
>
>* 6.Create a new project, choose any color you like and add it to favorites.

5. To run the Login fixture in 2 different browsers at the
   same time in headless mode, execute:
```
npm run login-f-test-multi-headless
```
> It will run the following test cases on Chrome browser:
>
>* 6.Create a new project, choose any color you like and add it to favorites.
## License
- - - -
[ISC](https://choosealicense.com/licenses/isc/)
Thank you!
:smile: