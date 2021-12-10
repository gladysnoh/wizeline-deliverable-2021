import { PROJECT_DATA, URLS } from '../data/constants';
import { STANDARD_USER } from '../data/roles';
import projectPage from '../pages/project-page';

fixture('Project feature test')
    .page`${URLS.LOGIN_URL}`
    .beforeEach(async t => {
        await t.useRole(STANDARD_USER)
    })

test.meta('type', 'smoke')('6. As a user I should be able to create a new favorite project with red color', async t => {
    await projectPage.addProjectWithRedColor(PROJECT_DATA.NAME)
    // Verifies that the added project is on favorite section and saved with the provided name
    await t.expect(projectPage.getFavoriteProjectSelectorByProjectName(PROJECT_DATA.NAME).exists).ok()
    // Then validates that the project color is red.
    await t.expect(projectPage.getProjectIconRedColorByProjectName(PROJECT_DATA.NAME).exists).ok()
})