describe('Implicit y explicit assertions',()=>{
    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/')
    })

    it('Validación implícita',()=>{
       cy.contains('Inputs').click()
       cy.get('h3')
       .should('have.text', 'Inputs')
       cy.get('.example')
       .should('have.class', 'example')
    })

    it('Validación explícita',()=>{
        cy.contains('Inputs').click()
        cy.get('h3')
       expect('Inputs').to.equals('Inputs')
    })
})
