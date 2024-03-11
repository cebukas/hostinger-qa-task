class HostingPage {

    // web elements with their locators
    #webElements = {
        getNewHostingPlanButton: () => cy.get('#hpanel_tracking-hosting_v2-get-plan_button'),
        getSingleButton: () => cy.contains('div', 'Single Web Hosting').children('#hpanel_tracking-buy-hosting-select_button'),
        getPremiumButton: () => cy.contains('div', 'Premium Web Hosting').children('#hpanel_tracking-buy-hosting-select_button'),
        getBusinessButton: () => cy.contains('div', 'Business Web Hosting').children('#hpanel_tracking-buy-hosting-select_button'),
        getPaymentSubmitButton: (timeout) => cy.contains('span', 'Choose payment method', { timeout: timeout }),
        get48MonthsButton: () => cy.get('[data-qa="48-months-title"]'),
        get24MonthsButton: () => cy.get('[data-qa="24-months-title"]'),
        get12MonthsButton: () => cy.get('[data-qa="12-months-title"]'),
        get1MonthsButton: () => cy.get('[data-qa="1-months-title"]'),
    };

    // page actions
    visit() {
        cy.visit('/hosting-v2');
    }

    clickNewHostingPlanButton() {
        cy.waitForSpinners();
        this.#webElements.getNewHostingPlanButton().click();
    }

    selectHostingType(hostingType) {
        cy.waitForSpinners();

        if (hostingType == "Single") {
            this.#webElements.getSingleButton().click({ force: true });
        }

        if (hostingType == "Premium") {
            this.#webElements.getPremiumButton().click({ force: true });
        }

        if (hostingType == "Business") {
            this.#webElements.getBusinessButton().click({ force: true });
        }
    }

    selectPlanDuration(planDuration) {
        cy.waitForSpinners();

        this.#webElements.getPaymentSubmitButton(Cypress.config('pageLoadTimeout')).should('be.visible');
        cy.waitForSkeletonLoader();

        if (planDuration == "48") {
            this.#webElements.get48MonthsButton().click();
        }
        if (planDuration == "24") {
            this.#webElements.get24MonthsButton().click();
        }
        if (planDuration == "12") {
            this.#webElements.get12MonthsButton().click();
        }
        if (planDuration == "1") {
            this.#webElements.get1MonthsButton().click();
        }
        cy.waitForSkeletonLoader();
    }

    clickChoosePaymentMethodButton() {
        this.#webElements.getPaymentSubmitButton().parent().click();
    }
}
export default HostingPage;