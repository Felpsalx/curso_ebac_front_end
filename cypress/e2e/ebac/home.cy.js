/// <reference types="cypress" />

describe("Testes de funcionalidades dos contatos", () => {

  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it("Deve adicionar um novo contato", () => {
    cy.get('input[placeholder="Nome"]').type('Teste Cypress')
    cy.get('input[placeholder="E-mail"]').type('teste@cypress.com')
    cy.get('input[placeholder="Telefone"]').type('123456789')

    cy.get('button').contains('Adicionar').click()

    cy.get('li')
      .should('contain.text', 'Teste Cypress')
      .and('contain.text', 'teste@cypress.com')
      .and('contain.text', '123456789')
  })

  it("Deve editar um contato existente", () => {

    cy.contains('Teste Cypress')
      .parent() 
      .within(() => {
        cy.get('button').contains('Editar').click()
      })

    cy.get('input[placeholder="Nome"]').clear().type('Cypress Editado')
    cy.get('input[placeholder="E-mail"]').clear().type('editado@cypress.com')
    cy.get('input[placeholder="Telefone"]').clear().type('987654321')

    cy.get('button').contains('Salvar').click()


    cy.get('li')
      .should('contain.text', 'Cypress Editado')
      .and('contain.text', 'editado@cypress.com')
      .and('contain.text', '987654321')
  })

  it("Deve remover um contato", () => {

    cy.contains('Cypress Editado')
      .parent()
      .within(() => {
        cy.get('button').contains('Remover').click()
      })

    cy.get('li').should('not.contain.text', 'Cypress Editado')
  })
})
