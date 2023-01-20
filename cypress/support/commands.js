Cypress.Commands.add('iframe',{prevSubjet:'element'},($iframe,selector)=>{
    Cypress.log({
        name: 'iframe',
        consoleProps(){
            return{
                iframe:$iframe
            }
        }
    })
    return new Cypress.Promise(resolve=>{
        resolve($iframe.contents().find(selector))
    })
})

Cypress.Commands.add('login',()=>{
    cy.visit('https://the-internet.herokuapp.com/')
    cy.request({
        method: "POST",
        form: true,
        url: '/authenticate',
        body:{ 
            username: 'tomsmith',
            password: 'SuperSecretPassword!'
        }
    })
    cy.visit('https://the-internet.herokuapp.com/secure')
    cy.getCookie('rack.session').should('exist')
})

Cypress.Commands.add('VisitInSameTab', (url)=>{
    cy.on('windows:before:load', (win)=>{
        cy.stub(win, 'open').as('windowOpen').callsFake(()=>{
            cy.visit(url)
        })
    })
})