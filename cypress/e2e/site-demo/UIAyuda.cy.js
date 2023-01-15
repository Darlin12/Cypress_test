describe('Pruebas sobre UI', ()=>{
    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/')
    })

    it('Ejemplo de esperas', ()=>{
        cy.wait(4000)
        cy.contains('Challenging DOM').click()
    })

    it('Nueva pestaña',()=>{
        cy.contains('Multiple Windows').click()
        cy.get('.example > a').invoke('removeAttr','target').click()
        cy.contains('New Window').should('have.text', 'New Window')
    })

    it('Shadow DOM', ()=>{
        cy.contains('Shadow DOM').click()
        cy.get('ul > :nth-child(2)').should('have.text', 'In a list!')
    })

    it('Primer y ultimo elemento', ()=>{
        //.last() and first()
        cy.contains('Dynamic Content').click()
        cy.get('img').eq(3).should('be.visible')
    })


    it('Padres e hijos',()=>{
        cy.contains('Dynamic Content').click()
        cy.get(':nth-child(4) > .large-2 > img').parent()
    })

    it('Invoke', ()=>{
        cy.contains('Dynamic Content')
        .should('be.hidden')
        .invoke('show')
        should('be.visible')
    })
})