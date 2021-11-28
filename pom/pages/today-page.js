import { Selector, t } from 'testcafe';
import faker from 'faker';
import { WAIT_TIME } from '../data/constants';

class TodayPage {
    constructor() {
        this.todayTitle = Selector('.simple_content').withExactText('Today')
        this.addTaskInitialButton = Selector('.view_content .plus_add_button').withExactText('Add task')
        // Form fields
        this.formTaskEditorContainer = Selector('form.task_editor');
        this.taskTittleInput = this.formTaskEditorContainer.find('div.public-DraftEditor-content')
        this.taskDescriptionInput = this.formTaskEditorContainer.find('textarea.task_editor__description_field')
        this.dueDateButton = this.formTaskEditorContainer.find('button.item_due_selector')
        this.addTaskButton = this.formTaskEditorContainer.find('button[type="submit"]').withExactText('Add task')
        this.closeTaskButton = this.formTaskEditorContainer.find('button').withExactText('Cancel')
        // Popper options
        this.tomorrowSuggestionButton = Selector('button[data-action-hint="scheduler-suggestion-tomorrow"]')
        // Today list selectors
        this.todaySectionList = Selector('#agenda_view ul.items > li')
    }

    async fillTaskData(title, description) {
        await t.typeText(this.taskTittleInput, title, { paste: true })
        await t.typeText(this.taskDescriptionInput, description, { paste: true })
    }

    async createSingleTodayTask(title, description) {
        await this.fillTaskData(title, description)
        await t.click(this.addTaskButton)
        await t.wait(WAIT_TIME.TWO_SECONDS)
    }

    async createSingleTomorrowTask(title, description) {
        await this.fillTaskData(title, description)
        await t.click(this.dueDateButton)
        await t.click(this.tomorrowSuggestionButton)
        await t.click(this.addTaskButton)
        await t.wait(WAIT_TIME.TWO_SECONDS)
    }

    async isTaskOnTodayList(taskTitle) {
        // We subtract one element in order to ignore the "Add task" button at the end of the list.
        const numberOfTasksOnScreen = await this.todaySectionList.count - 1;
        for (let i = 0; i < numberOfTasksOnScreen; i++) {
            const taskTitleSelector = this.todaySectionList.nth(i).find('div.task_content');
            const titleValue = await taskTitleSelector.innerText;
            if (taskTitle === titleValue) {
                return true;
            }
        }
        return false;
    }

    async areTasksOnTodayList(taskTitles) {
        for (let i = 0; i < taskTitles.length; i++) {
            const title = taskTitles[i];
            if (!await this.isTaskOnTodayList(title)) {
                return false;
            }
        }
        return true;
    }

    getDynamicDataForTasks() {
        const taskData = [];
        for (let i = 0; i < 10; i++) {
            const title = faker.lorem.words();
            const description = faker.lorem.paragraph();
            taskData.push({
                title, description
            })
        }
        return taskData;
    }

    async createMultipleDynamicTodayTasks(tasksToCreate) {
        const addedTitles = [];
        await t.click(this.addTaskInitialButton)
        // Per every task, we will use faker package to generate dynamic data.
        for (let i = 0; i < tasksToCreate.length; i++) {
            const taskDynamicData = tasksToCreate[i];
            await this.createSingleTodayTask(taskDynamicData.title, taskDynamicData.description);
            addedTitles.push(taskDynamicData.title);
        }
        return addedTitles;
    }
}

export default new TodayPage()