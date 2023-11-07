Feature: Login api

    Scenario: Cadastrar novo Ambiente de Trabalho
        Given O sistema faz uma requisição informando usuário e senha correto
        When Aguarda a resposta http
        Then Logo, recebe um tokem de autenticação

        

   
        