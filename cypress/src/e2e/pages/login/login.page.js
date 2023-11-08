const elements = require('./elements').ELEMENTS;
const acesso = require('../../../../../cypress.env.json');

class LoginPage {

    logaSisprevmais(){
        cy.visit('/')
    }

}
export default new LoginPage();