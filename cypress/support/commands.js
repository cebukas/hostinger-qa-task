import MainHostingerPage from '../pages/MainHostingerPage';
import LoginPage from '../pages/LoginPage';

Cypress.Commands.add('login', (email, password) => {
    cy.session([email, password], () => {
        let loginPage = new LoginPage();
        let mainHostingerPage = new MainHostingerPage();

        mainHostingerPage.visit();
        mainHostingerPage.clickLoginButton();

        loginPage.fillEmailField(email);
        loginPage.fillPasswordField(password);
        loginPage.clickLoginButton();

        loginPage.validateThatLoggedIn();
    })
})

// A general wait mechanism that should be applicable to most page loads
Cypress.Commands.add('waitForSpinners', () => {
    cy.get('.animation-loader', { timeout: Cypress.config('pageLoadTimeout') }).should('not.be.visible');
    cy.get('.h-page undefined-page', { timeout: Cypress.config('pageLoadTimeout') }).should('not.exist');
})

// a wait mechanism for when information is loading in a modal form
Cypress.Commands.add('waitForSkeletonLoader', () => {
    cy.get('.skeleton-loader', { timeout: Cypress.config('pageLoadTimeout') }).should('not.exist');
})