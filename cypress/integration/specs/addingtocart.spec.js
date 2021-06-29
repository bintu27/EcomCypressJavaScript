/// <reference types="Cypress" />
import AddressPage from "../../support/Pages/AddressPage";
import HomePage from "../../support/Pages/HomePage";
import LoginPage from "../../support/Pages/LoginPage";
import PaymentPage from "../../support/Pages/PaymentPage";
import ShippingPage from "../../support/Pages/ShippingPage";
import SummaryPage from "../../support/Pages/SummaryPage";

describe('Add products to cart', function() 
    {
        before(function() {
            // runs once before all tests in the block
            cy.fixture('example').then(function(data)
            {
    this.data=data
            })
          })

    it('My FirstTest case',function() {
        const homePage=new HomePage()
        const loginPage=new LoginPage()
        const addressPage = new AddressPage()
        const summaryPage =new SummaryPage()
        const shippingPage = new ShippingPage()
        const paymentPage =new PaymentPage()
        cy.visit("http://automationpractice.com/index.php")
        loginPage.loginAccount(this.data.login, this.data.password)
        homePage.getSearchBox(this.data.searchtext)
        homePage.verifySearchedProductCount(5)
        homePage.addToCart(this.data.productName)
        homePage.proceedToCheckout().click()
        summaryPage.proceedToCheckoutSummary().click()
        addressPage.proceedToCheckoutAddress().click()
        shippingPage.accepctTerms().check()
        shippingPage.proceedToCheckoutCarrier().click()
        paymentPage.payByBankWire().click()
        paymentPage.confirmOrder().click()
        paymentPage.orderComplete(this.data.orderComplete)
    })
})