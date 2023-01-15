describe('Home de www.freeRangeTesters.com', ()=>{
   beforeEach(()=>{
    cy.visit('https://www.freerangetesters.com/')
   })

   it('should have a title', () =>{
    cy.title().should('include', 'Free Range Testers')

   })

   it('El campo Nombre del formulario, posee clase jas-custom-focus',()=>{
      cy.get('#input_comp-l1ed927d').should('have.class', 'has-custom-focus')

   })

   it('Hay un link llamado blog en la barra de navegación', ()=>{
      cy.get('#comp-l02x1m8d1label').should('have.text', 'Blog')
   })

   it('Existe un botón de Empezá a aprender en el Home', ()=>{
      cy.wait(4000)
      cy.get('#comp-krjarw4p > [data-testid="linkElement"]').should('be.visible')
   })

  
  
})


//npx cypress open