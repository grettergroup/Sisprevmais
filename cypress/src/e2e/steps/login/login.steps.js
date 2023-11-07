
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '../../pages/login/login.page';

Given('O usuário navega para a tela de autenticação da extranet', () => {
    loginPage.acessaTranslateGoogle()
}) 
    
When('Informa o usuário e senha', () => {
    return true
}) 
        
When('E clica em Acessar Extranet', () => {
    return true
}) 
        
Then('logo, está autenticado na extranet', () => {
    return true
}) 