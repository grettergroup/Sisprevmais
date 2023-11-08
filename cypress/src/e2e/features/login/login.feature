Feature: Login
        Como usuário desejo autenticar no Sisprevmais
 
    Scenario: Acessar Sisprevmais com usuário e senhas corretas
        Given O usuário navega para a tela de login para autenticar no sistema
        When Informa o usuário, senha e clica no botão acessar
        Then logo, o usuário está autenticado no sistema

   