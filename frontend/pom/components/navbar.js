import { Selector } from 'testcafe';

class navbar {
    constructor() {
        this.logInOption = Selector('ul>li>a').nth(4)
        this.avatarButton = Selector('.top_bar_btn.settings_btn')
        this.logOutOption = Selector('button .user_menu_label').nth(1)
    }
}

export default new navbar()