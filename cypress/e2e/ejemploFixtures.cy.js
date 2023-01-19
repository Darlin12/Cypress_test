describe('Ejemplo con Fixture',()=>{
    before(function(){
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.fixture('credenciales').then(function(testdata){
             this.testdata = testdata
        })

    })

    it('Logueo usando fixtures',function(){
        cy.get('#username').type(this.testdata.username)
        cy.get('#password').type(this.testdata.password)
        cy.get('form').contains('Login').click()
        cy.url().should('contain', '/secure')
    })
})