class LoginPage
    {
        loginAccount(email, password){
            cy.get('.login').click()
            cy.get('#email').type(email)
            cy.get('#passwd').type(password)
            return cy.get("#SubmitLogin").click()
        }
    }
export default LoginPage;