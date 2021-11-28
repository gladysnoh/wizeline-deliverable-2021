import { Selector } from 'testcafe';

class navbar {
    constructor() {
        this.logInOption = Selector('ul>li>a').withExactText('Log in')
        this.avatarButton = Selector('.top_bar_btn.settings_btn')
        this.logOutOption = Selector('button .user_menu_label').withExactText('Log out')
    }
}

export default new navbar()