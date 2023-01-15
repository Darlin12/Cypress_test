describe('Login en Demo page', ()=>{
    beforeEach(()=>{
        //Navegar a pagina a probar
        cy.visit("https://the-internet.herokuapp.com/login")

    })

    it(('Llenar formulario y hacer submit'),()=>{
        //Escribir usuario en campo usuario
        cy.get('#username').type('tomsmith').pause()

        //Escribir contraseña
        cy.get('#password').type('SuperSecretPassword!').pause()

        //presionar click en login
        cy.get('form').find('[type="submit"]').click()

        //Assertion para validar que hemos hecho login
        cy.get('.flash').contains('You logged into a secure area!')
        
        
    })
})