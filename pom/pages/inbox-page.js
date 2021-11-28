import { Selector, t } from 'testcafe';
import { WAIT_TIME } from '../data/constants';

class InboxPage {
    constructor() {
        this.defaultInboxListSection = Selector('section.section__default');
        this.taskListSelector = this.defaultInboxListSection.find('ul.items')
            .child('li')
        this.deleteMenuOption = Selector('div.icon_menu_item__content')
            .withExactText('Delete task')
        this.confirmDeleteButton = Selector('footer.confirm_dialog__actions')
            .child('button').withExactText('Delete')
    }

    async deleteAllInboxTasks() {
        // We subtract one element in order to ignore the "Add task" child.
        const taskOnScreen = await this.taskListSelector.count -1
        for (let i = taskOnScreen - 1; i >= 0; i--) {
            const taskSingleLi = this.taskListSelector.nth(i);
            await t.rightClick(taskSingleLi)
            await t.click(this.deleteMenuOption)
            await t.click(this.confirmDeleteButton)
            await t.wait(WAIT_TIME.TWO_SECONDS)
        }
    }
}

export default new InboxPage()