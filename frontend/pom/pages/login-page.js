import { Selector, t } from 'testcafe';
import navbar from './navbar';

class LoginPage {
    constructor() {
        this.emailInput = Selector('#email')
        this.passwordInput = Selector('#password')
        this.loginSubmitButton = Selector('.submit_btn.sel_login')
        //ERROR MESSAGES
        this.errorMessage = Selector('.error_msg')
    }

    async submitLoginForm(username, password) {
        await t.click(navbar.logInOption)
        if (username != null) {
            await t.typeText(this.emailInput, username, { paste: true })
        }
        if (password != null) {
            await t.typeText(this.passwordInput, password, { paste: true })
        }
        await t.click(this.loginSubmitButton)
    }

    async logOut(){
        await t
            .click(navbar.avatarButton)
            .click(navbar.logOutOption)
    }
}

export default new LoginPage()