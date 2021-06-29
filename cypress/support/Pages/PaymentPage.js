class PaymentPage
    {
        payByBankWire(){
            return cy.get('.bankwire')
        }
        confirmOrder(){
            return cy.get('#cart_navigation button[type=submit]')
        }
        orderComplete(message){
            return cy.get('.cheque-indent > .dark').should('contain.text',message)
        }
    }
export default PaymentPage;