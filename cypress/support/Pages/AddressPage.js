class AddressPage
    {
        proceedToCheckoutAddress(){
            return cy.get('button[type=submit][name=processAddress]')
        }
    }
export default AddressPage;