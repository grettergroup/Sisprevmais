import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given("O sistema faz uma requisição informando usuário e senha correto", () => {

        
    cy.request({
        method: 'GET',
        url: 'https://gorest.co.in/public/v2/users',
        failOnStatusCode : false,
    }).as('details')

    cy.get('@details').its('status').should('eq', 200)
    cy.get('@details').then((response) => {
        cy.log(JSON.stringify(response.body))
    })
        
    
})

When("Aguarda a resposta http", () => {
    return true
})

Then("Logo, recebe um tokem de autenticação", () => {
    return true
}) 


