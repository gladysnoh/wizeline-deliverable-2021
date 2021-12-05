import { PROJECT_DATA, URLS, WAIT_TIME } from '../data/constants';
import { STANDARD_USER } from '../data/roles';
import sidebar from '../components/sidebar';
import projectPage from '../pages/project-page';

fixture('Project feature test')
    .page`${URLS.LOGIN_URL}`
    .beforeEach(async t => {
        await t.useRole(STANDARD_USER)
    })

test.meta('type', 'smoke')('6. As a user I should be able to create a new project', async t => {
    await t.click(sidebar.addProjectButton)
    await t.typeText(projectPage.nameProjectInput, PROJECT_DATA.NAME, { paste: true })
    await t.click(projectPage.colorProjecDropdownMenu)
    await t.click(projectPage.redColorProjectOption)
    await t.click(projectPage.addFavoritesCheckbox)
    await t.click(projectPage.addProjectButton)
    await t.wait(WAIT_TIME.TWO_SECONDS)
    await t.expect(projectPage.getProjectNameSelectorFromList(PROJECT_DATA.NAME).exists).ok()
})