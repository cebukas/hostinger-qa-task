class LoginPage {

    // web elements with their locators
    #webElements = {
        getLoginButton: () => cy.get('[data-qa="login-button"]'),
        getEmailField: () => cy.get('#email-input'),
        getPasswordField: () => cy.get('#password-input'),
        getHelloTitle: (timeout) => cy.contains('h2', 'Hello', { timeout: timeout })
    };

    // page actions
    fillEmailField(email) {
        this.#webElements.getEmailField().type(email);
    }

    fillPasswordField(password) {
        this.#webElements.getPasswordField().type(password);
    }

    clickLoginButton() {
        this.#webElements.getLoginButton().click();
    }

    // page validations
    validateThatLoggedIn() {
        this.#webElements.getHelloTitle(Cypress.config('pageLoadTimeout')).should('be.visible');
    }
}
export default LoginPage;