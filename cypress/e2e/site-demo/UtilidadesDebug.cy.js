describe('Utilidades para debugging con cypress', ()=>{
    beforeEach(()=>{
       cy.visit('https://the-internet.herokuapp.com/login')
    })

    it('Login',()=>{
        cy.log('Escribe el username')
        cy.get('#username').type('tomsmith')
        cy.log('Escribe contraseña')
        cy.get('#password').debug().type('SuperSecretPassword!')
        cy.log('Hace Click en el botón de login')
        cy.get('form').contains('Login').click()
        cy.url().should('contain', '/secure')
    })


})


    
