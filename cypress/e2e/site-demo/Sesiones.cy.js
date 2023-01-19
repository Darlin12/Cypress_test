describe('Sesiones y Cookies' ,function(){
    beforeEach(()=>{
          cy.visit('https://the-internet.herokuapp.com/login')
    })
    
    it(('Sin sesion guardada'),()=>{
        //Escribir usuario en campo usuario
        cy.get('#username').type('tomsmith')

        //Escribir contraseña
        cy.get('#password').type('SuperSecretPassword!')

        //presionar click en login
        cy.get('form').find('[type="submit"]').click()

        //Assertion para validar que hemos hecho login
        cy.get('.flash').contains('You logged into a secure area!')
    })

    it(('Con sesion guardada'),()=>{
        cy.session('Tom', ()=>{

        //Visita pag de login
        cy.visit('https://the-internet.herokuapp.com/login')
           
        //Escribir usuario en campo usuario
        cy.get('#username').type('tomsmith')

        //Escribir contraseña
        cy.get('#password').type('SuperSecretPassword!')

        //presionar click en login
        cy.get('form').find('[type="submit"]').click()

        //Assertion para validar que hemos hecho login
        cy.get('.flash').contains('You logged into a secure area!')

        //Para la cookies
        cy.getCookies().should('have.length', 6).then((cookie)=>{
            expect(cookie[0]).to.have.property('name', 'optimizelyPendingLogEvents')
        })
        })
    })

    it(('Con sesion guardada 2'),()=>{
        cy.session('Tom', ()=>{

        //Visita pag de login
        cy.visit('https://the-internet.herokuapp.com/login')
           
        //Escribir usuario en campo usuario
        cy.get('#username').type('tomsmith')

        //Escribir contraseña
        cy.get('#password').type('SuperSecretPassword!')

        //presionar click en login
        cy.get('form').find('[type="submit"]').click()

        //Assertion para validar que hemos hecho login
        cy.get('.flash').contains('You logged into a secure area!')

        //Para la cookies
        cy.getCookie('optimizelyPendingLogEvents').should('exist')
        })


    })
})