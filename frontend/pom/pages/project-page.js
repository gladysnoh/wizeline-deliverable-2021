import { Selector, t } from 'testcafe';
import sidebar from '../components/sidebar';
import { WAIT_TIME } from '../data/constants';

class ProjectPage {

    DROPDOWN_RED_COLOR_VALUE = '31';
    RED_COLOR_STYLE_VALUE = 'color: rgb(219, 64, 53);';

    constructor() {
        this.nameProjectInput = Selector('#edit_project_modal_field_name')
        this.colorProjecDropdownMenu = Selector('.color_dropdown_toggle.form_field_control')
        this.redColorProjectOption = Selector('.color_dropdown_select ul > li')
            .withAttribute('data-value', this.DROPDOWN_RED_COLOR_VALUE)
        this.addFavoritesCheckbox = Selector('.reactist_switch')
            .child('input').withAttribute('name', 'is_favorite')
        this.addProjectButton = Selector('footer > button').withExactText('Add')
    }

    async addProjectWithRedColor(projectName) {
        await t.click(sidebar.addProjectButton)
        await t.typeText(this.nameProjectInput, projectName, { paste: true })
        await t.click(this.colorProjecDropdownMenu)
        await t.click(this.redColorProjectOption)
        await t.click(this.addFavoritesCheckbox)
        await t.click(this.addProjectButton)
        await t.wait(WAIT_TIME.TWO_SECONDS)
    }

    getFavoriteListSelector() {
        return Selector('ul').withAttribute('aria-label', 'Favorites')
            .child('li')
    }

    getFavoriteProjectSelectorByProjectName(projectName) {
        return this.getFavoriteListSelector().find(`a[aria-label*="${projectName}"]`)
    }

    getProjectIconRedColorByProjectName(projectName) {
       return this.getFavoriteProjectSelectorByProjectName(projectName).find('svg.project_icon')
            .withAttribute('style', this.RED_COLOR_STYLE_VALUE)
    }
}

export default new ProjectPage()