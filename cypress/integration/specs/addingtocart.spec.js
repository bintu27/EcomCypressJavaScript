/// <reference types="Cypress" />
import HomePage from "../../support/Pages/HomePage";

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
        cy.visit("http://automationpractice.com/index.php")
        homePage.getSearchBox(this.data.searchtext)
        homePage.verifySearchedProductCount(5)
        homePage.addToCart(this.data.productName)
    })
})