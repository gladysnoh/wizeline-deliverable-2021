import loginPage from '../pages/login-page'
import { ALERT_MESSAGES, CREDENTIALS, URLS } from '../data/constants'
import todayPage from '../pages/today-page'

fixture('Login feature test')
    .page`${URLS.LOGIN_URL}`

test.meta('type', 'smoke')('1. As a User I should be able to Login successfully', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.ACCEPTED_CREDENTIALS.EMAIL_USER, CREDENTIALS.ACCEPTED_CREDENTIALS.PASSWORD)
    await t.expect(todayPage.todayTitle.exists).ok()
    await loginPage.logOut()
})

test('2. As a User, I shouldn\'t be able to Log in with a wrong password', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.ACCEPTED_CREDENTIALS.EMAIL_USER, CREDENTIALS.INVALID_CREDENTIALS.INVALID_PASSWORD)
    await t.expect(loginPage.errorMessage.innerText).eql(ALERT_MESSAGES.ERROR_MESSAGES.LOGIN_PAGE.WRONG_USER_PASSWORD)
})

test('2.1. As a User, I shouldn\'t  be able to Log in with an invalid email', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.INVALID_CREDENTIALS.INVALID_EMAIL, CREDENTIALS.ACCEPTED_CREDENTIALS.PASSWORD)
    await t.expect(loginPage.errorMessage.innerText).eql(ALERT_MESSAGES.ERROR_MESSAGES.LOGIN_PAGE.INVALID_EMAIL)
})

test('2.2. As a user, I shouldn\'t  be able to log in when I don\'t provide a password', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.ACCEPTED_CREDENTIALS.EMAIL_USER, null)
    await t.expect(loginPage.errorMessage.innerText).eql(ALERT_MESSAGES.ERROR_MESSAGES.LOGIN_PAGE.PASSWORD_REQUIRED)
})