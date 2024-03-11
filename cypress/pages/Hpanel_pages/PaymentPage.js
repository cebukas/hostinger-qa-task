class PaymentPage {

    // web elements with their locators
    #webElements = {
        getTotalPaymentAmount: () => cy.get('#number'),
        getTitle: (timeout) => cy.title({ timeout: timeout })
    };


    expectedTitle = 'Hostinger.com Payments';

    // page validations
    validatePayment(duration, payment) {
        // expected payment = monthly payment * duration * vat
        let expectedPayment = (parseFloat(payment) * parseInt(duration) * (100 + parseInt(Cypress.config('vat'))) / 100).toFixed(2)
        this.#webElements.getTotalPaymentAmount().invoke('text').should('equal', expectedPayment)
    }

    validatePageIsLoaded() {
        this.#webElements.getTitle(Cypress.config('pageLoadTimeout')).should('contain', this.expectedTitle);
    }
}
export default PaymentPage;