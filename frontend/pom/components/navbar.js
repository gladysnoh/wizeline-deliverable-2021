import { Selector } from 'testcafe';

class Navbar {
    constructor() {
        this.logInOption = Selector('ul>li>a').withAttribute('href', /login/u)
        this.avatarButton = Selector('.top_bar_btn.settings_btn')
        this.logOutOption = Selector('.user_menu button .user_menu_label').nth(1)
    }
}

export default new Navbar()