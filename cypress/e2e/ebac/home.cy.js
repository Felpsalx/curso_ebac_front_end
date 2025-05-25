/// <reference types="cypress" />

describe("Teste completo de contatos em sequência", () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it("Adicionar, editar e remover contato", () => {

    cy.get('input[placeholder="Nome"]').type('Teste Cypress')
    cy.get('input[placeholder="E-mail"]').type('teste@cypress.com')
    cy.get('input[placeholder="Telefone"]').type('123456789')
    cy.get('button').contains('Adicionar').click()


    cy.contains('Teste Cypress').should('be.visible')


    cy.contains('Teste Cypress')
      .closest('div.contato')
      .within(() => {
        cy.contains('button', /editar/i).click()
      })

    // Alterar os dados
    cy.get('input[placeholder="Nome"]').clear().type('Cypress Editado')
    cy.get('input[placeholder="E-mail"]').clear().type('editado@cypress.com')
    cy.get('input[placeholder="Telefone"]').clear().type('987654321')

    cy.get('button').contains(/salvar/i).click()


    cy.contains('Cypress Editado').should('be.visible')

    cy.contains('Cypress Editado')
      .closest('div.contato')
      .within(() => {
        cy.contains('button', /deletar|remover/i).click()
      })


    cy.contains('Cypress Editado').should('not.exist')
  })
})
