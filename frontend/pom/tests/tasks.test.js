import { TASK_DATA, URLS } from '../data/constants'
import todayPage from '../pages/today-page'
import upcomingPage from '../pages/upcoming-page'
import { STANDARD_USER } from '../data/roles';
import sidebar from '../components/sidebar';
import inboxPage from '../pages/inbox-page';

fixture('Task feature test')
    .page`${URLS.LOGIN_URL}`
    .beforeEach(async t => {
        await t.useRole(STANDARD_USER)
    })
    .afterEach(async () => {
        // Delete all created tasks!
        await sidebar.goToFilter(sidebar.INBOX_FILTER)
        await inboxPage.deleteAllInboxTasks()
    })

test.meta('type', 'smoke')('3. As a user I should be able to create a single task with today due date', async t => {
    await t.click(todayPage.addTaskInitialButton)
    await todayPage.createSingleTodayTask(TASK_DATA.TODAY.TITLE, TASK_DATA.TODAY.DESCRIPTION)
    await t.expect(await todayPage.isTaskOnTodayList(TASK_DATA.TODAY.TITLE)).ok()
})

test('4. As a user I should be able to create a single task with tomorrow due date', async t => {
    await t.click(todayPage.addTaskInitialButton)
    await todayPage.createSingleTomorrowTask(TASK_DATA.TOMORROW.TITLE, TASK_DATA.TOMORROW.DESCRIPTION)
    await sidebar.goToFilter(sidebar.UPCOMING_FILTER)
    await t.expect(await upcomingPage.isTaskOnTomorrowULList(TASK_DATA.TOMORROW.TITLE)).ok()
})

test('5. As a user I should be able to create 10 tasks with today due date', async t => {
    const tasks = todayPage.getDynamicDataForTasks();
    await todayPage.createMultipleDynamicTodayTasks(tasks);
    await t.expect(await todayPage.areTasksOnTodayList(tasks.map((t) => t.title))).ok();
})
