/// <reference types="cypress"/>


describe('search devices', () => {
    
    it('Buscar dispositivo especifico',() => {
        cy.request(
            {
                method: 'GET',
                url: 'https://api.restful-api.dev/objects/ff8081818ead0ebb018ec3eb01d74fa5'
            }
        )
        .then((response) => {
            expect(response.status).to.equal(200)
            expect(response.status).to.exist

        })

    })

    it('Buscar todos os dispositivos',() => 
    {
        cy.request(
            {
                method: 'GET',
                url: 'https://api.restful-api.dev/objects'
            }
        )
        .then((response) => {
            response.body.forEach(device => {
                expect(device).to.have.property('id')
                expect(device).to.have.property('name')
                expect(device).to.have.property('data')
                
            })
            

        })
        
    })

    it('Buscar dispositivos inexistente',() => {
    })
})