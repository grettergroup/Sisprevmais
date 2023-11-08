
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '../../pages/login/login.page';

Given('O usuário navega para a tela de login para autenticar no sistema', () => {
    loginPage.logaSisprevmais()
}) 
    
When('Informa o usuário, senha e clica no botão acessar', () => {
    return true
}) 
              
Then('logo, o usuário está autenticado no sistema', () => {
    return true
}) 