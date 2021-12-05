import { Role } from 'testcafe'
import loginPage from '../pages/login-page'
import {URLS, CREDENTIALS} from './constants';

export const STANDARD_USER = Role(URLS.LOGIN_URL, async() =>{
    await loginPage.submitLoginForm(
        CREDENTIALS.ACCEPTED_CREDENTIALS.EMAIL_USER,
        CREDENTIALS.ACCEPTED_CREDENTIALS.PASSWORD
    )
    }, {preserveUrl: true})