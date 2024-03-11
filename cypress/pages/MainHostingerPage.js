class MainHostingerPage {

    // web elements with their locators
    #webElements = {
        getLoginButton: () => cy.get('#hgr-topmenu-login'),
    };

    // page actions
    visit() {
        cy.visit('https://www.hostinger.com/');
    }

    clickLoginButton() {
        this.#webElements.getLoginButton().click();
    }

}
export default MainHostingerPage;