import { Selector, t } from 'testcafe';
import { WAIT_TIME } from '../data/constants';

class Sidebar {
    TODAY_FILTER = 'TODAY';
    UPCOMING_FILTER = 'UPCOMING';
    INBOX_FILTER = 'INBOX';

    constructor() {
        this.sidebarMenu = Selector('#left_menu');
        this.todayFilterOption = this.sidebarMenu.find('#filter_today > a');
        this.upcomingFilterOption = this.sidebarMenu.find('#filter_upcoming > a');
        this.inboxFilterOption = this.sidebarMenu.find('#filter_inbox > span');
        this.addProjectButton = Selector('.adder_icon').nth(0)
    }

    async goToFilter(filterToGo) {
        if (this.TODAY_FILTER === filterToGo) {
            await t.click(this.todayFilterOption)
        } else if (this.UPCOMING_FILTER === filterToGo) {
            await t.click(this.upcomingFilterOption)
        } else if (this.INBOX_FILTER === filterToGo) {
            await t.click(this.inboxFilterOption)
        }
    }
}

export default new Sidebar()
