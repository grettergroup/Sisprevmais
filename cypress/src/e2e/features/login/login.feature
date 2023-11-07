Feature: Loga Extranet
        Como usuário desejo autenticar na Extranet da Agenda Assessoria
 
    Scenario: Validar login com dados corretos
        Given O usuário navega para a tela de autenticação da extranet
        When Informa o usuário e senha
        And E clica em Acessar Extranet
        Then logo, está autenticado na extranet

   