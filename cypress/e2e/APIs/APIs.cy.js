describe('Pruebas en API', ()=>{

    it('Él endpoint "posts" responde con status 200', ()=>{
        cy.request({
            url:"https://jsonplaceholder.typicode.com/posts"
        }).then((respuesta)=>{
            expect(respuesta.status).to.eq(200)
        })
    })

    it('El endpoint "posts" tiene 100 entradas', ()=>{
        cy.visit("https://jsonplaceholder.typicode.com")
        cy.request("/posts")
        .its('body')
        .should('have.length',100)
    })

    it('El post número 1 tiene titulo "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"', ()=>{
        cy.visit("https://jsonplaceholder.typicode.com")
        cy.request("/posts/2")
        .its('body')
        .should('have.property', 'title','qui est esse')
    })

    it('El POST request funciona correctamente para el endpoint', ()=>{
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts',{
          userId: 75,
          id: 2,
          title: "Quote",
          body: "Dont let yourself down"
        }).then((response)=>{
            expect(response.status).to.eq(201)
        })
    })

})