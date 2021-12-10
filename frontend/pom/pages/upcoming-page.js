import { Selector } from 'testcafe';
import { TaskUtils } from '../utils/task-utils';

class UpcomingPage {
    constructor() {
        this.upcomingViewCalendar = Selector('.upcoming_view__calendar')
    }

    getTomorrowULListSelector() {
        // Get the tomorrow date with the pattern: "YYYY-MM-DD". Ex 2021-11-25
        const tomorrowDateId = TaskUtils.getTomorrowDataDayListId();
        return Selector(`ul[data-day-list-id="${tomorrowDateId}"] > li`)
    }

    async isTaskOnTomorrowULList(taskTitle) {
        // We call the method to get the tomorrow id
        const ulListSelector = this.getTomorrowULListSelector();
        // We subtract one element in order to ignore the "Add task" button at the end of the list.
        const numberOfTasksOnScreen = await ulListSelector.count - 1;
        for (let i = 0; i < numberOfTasksOnScreen; i++) {
            const taskTitleSelector = ulListSelector.nth(i).find('div.task_content');
            const titleValue = await taskTitleSelector.innerText;
            if (taskTitle === titleValue) {
                return true;
            }
        }
        return false;
    }
}

export default new UpcomingPage()