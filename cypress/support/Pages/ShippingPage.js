class ShippingPage
    {
        accepctTerms(){ 
            return cy.get('input[type=checkbox]')
        }
        proceedToCheckoutCarrier(){
            return cy.get('button[type=submit][name=processCarrier]')
        }
    }
export default ShippingPage;