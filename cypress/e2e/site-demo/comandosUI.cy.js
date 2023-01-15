describe('Pruebas sobre UI parte II', ()=>{
    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/')
    })

    //Ejemplo de click
    it('Ejemplo de click', ()=>{
        cy.contains('Add/Remove Elements').click()
        cy.get('button').click()
        cy.get('.added-manually').click()    
    })

    //Ejemplo de escritura
    it(('Llenar formulario y hacer submit'),()=>{

        cy.contains('Form Authentication').click()
        //Escribir usuario en campo usuario
        cy.get('#username').type('tomsmith')

        //Escribir contraseña
        cy.get('#password').type('SuperSecretPassword!')

        //presionar click en login
        cy.get('form').find('[type="submit"]').click()

        //Assertion para validar que hemos hecho login
        cy.get('.flash').contains('You logged into a secure area!')
    })

    //Hover  --  force click
    it(('Access hidden content'),()=>{
        cy.contains('Hovers').click()
        cy.get('#content > div > div:nth-child(4) > div > a').click({force: true})
    })


    //Click derecho
    it(('Click derecho'),()=>{
        cy.contains('Context Menu').click()
        cy.get('#hot-spot').invoke('trigger', 'contextmenu')
        cy.on('window:alert',(alert)=>{
            expect(alert).to.equal("You selected a context menu")
        })
        
    })

})