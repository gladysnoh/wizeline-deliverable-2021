import { Selector } from 'testcafe';

class ProjectPage {

    RED_COLOR_VALUE = '31';

    constructor() {
        this.nameProjectInput = Selector('#edit_project_modal_field_name')
        this.colorProjecDropdownMenu = Selector('.color_dropdown_toggle.form_field_control')
        this.redColorProjectOption = Selector('.color_dropdown_select ul > li')
            .withAttribute('data-value', this.RED_COLOR_VALUE)
        this.addFavoritesCheckbox = Selector('.reactist_switch')
            .child('input').withAttribute('name', 'is_favorite')
        this.addProjectButton = Selector('footer > button').withExactText('Add')
    }

    getProjectNameSelectorFromList(projectName) {
        return Selector('ul').withAttribute('aria-label', 'Favorites')
            .child('li').find('span').withExactText(projectName);
    }
}

export default new ProjectPage()