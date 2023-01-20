const testdata = require('../../fixtures/titulos.json')

testdata.forEach((testdata)=>{
    describe('El titulo es el correcto para cada subpagina en Free Range Testers',()=>{
        it('Validar que' +testdata.title+ 'sea el titulo correcto', () => {
            cy.visit(testdata.location)
            cy.title().should('include', testdata.title)
        });
    })
})