import HostingPage from '../pages/Hpanel_pages/HostingPage';
import PaymentPage from '../pages/Hpanel_pages/PaymentPage';

describe('Hosting plan tests', () => {
  let hostingPage;
  let paymentPage;

  beforeEach(() => {
    hostingPage = new HostingPage();
    paymentPage = new PaymentPage();

    cy.login(Cypress.env('email'), Cypress.env('password'))
  });


  it('Create a hosting plan and validate the total price', () => {
    cy.fixture('hostingPlanCombinations').then((hostingPlanDataSet) => {
      for (const data of Object.values(hostingPlanDataSet)) {
        hostingPage.visit();
        hostingPage.clickNewHostingPlanButton();
        hostingPage.selectHostingType(data.hostingType);
        hostingPage.selectPlanDuration(data.planDuration)
        hostingPage.clickChoosePaymentMethodButton();

        paymentPage.validatePageIsLoaded();
        paymentPage.validatePayment(data.planDuration, data.expectedPricePerMonth);
      }
    });
  })
})


// nepamirst istrint pw pries publishinat