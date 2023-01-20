describe('loguear - basic Auth y Auth con Form',()=>{
    it('Sin loguear',()=>{
        cy.visit('https://the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('include.text','Congratulations! You must have the proper credentials.')
    })

    it('Loguea usando Auth de cypress',()=>{
        cy.visit('https://the-internet.herokuapp.com/basic_auth',{
            auth:{
                username: 'admin',
                password: 'admin'
            }
        })
        cy.get('p').should('include.text','Congratulations! You must have the proper credentials.')
    })

    it('Logueo con las credenciales en la URL',()=>{
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('include.text','Congratulations! You must have the proper credentials.')
    })

    it('Logueo mediante form con método POST',()=>{
      cy.login()
        cy.get('.subheader').should('include.text', 'Welcome to the Secure Area. When you are done click logout below.')
        

    })
})




