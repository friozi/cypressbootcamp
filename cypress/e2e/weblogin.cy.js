/// <reference types="cypress"/>

describe('Login',() => {

    beforeEach('Acessar a aplicacao', () => {
        cy.visit('https://automationpratice.com.br/login')


   })

    it('Login com sucesso', () => {
        // dado
        // 1. acessar aplicacao
        // 2. preencher credenciais
        // #id = #user
        // . class = .
        cy.get('#user').type('eduardo.finotti@qazando.com.br')
        cy.get('#password').type('12345')
        // quando
        //clicar em entrar
        cy.get('#btnLogin').click()
        // entao
        // Vejo mensagem de sucess
        cy.get('#swal2-title').should('have.text', 'Login realizado')

    }
    )

    it('Senha Invalida', () => {
       
        cy.get('#user').type('eduardo.finotti@qazando.com.br')
        cy.get('#password').type('12345')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', 'Senha inválida.')

    }
    )

    it('Email Invalido', () => {
        
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    }
    )

}
)