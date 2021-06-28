class HomePage
    {
        getSearchBox(fieldText){
            cy.get('#search_query_top').type(fieldText)
            return cy.get("button[name='submit_search']").click()
        }
        verifySearchedProductCount(length){
        //use alias instand of variable as we need to reloves promise if we use variable in cypress
        cy.get('.product_list').as('productList')
        cy.get('@productList').find('.product-container').should('have.length',length)
        }
        addToCart(productName){
            //find Specific child elements and click on add to cart
        cy.get('.product_list').find('.product-container').each(($el, index, $list) => {
            const textVal = $el.find('a.product-name').text()
            if (textVal.includes(productName))
            {
                cy.get('.ajax_add_to_cart_button').eq(index).click()
            }
    })
        }
    }
export default HomePage;