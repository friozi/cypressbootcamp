/// <reference types="cypress"/>


describe('insert devices', () => {
    
    it('Cadastrar dispositivo com sucesso',() => {
        cy.request(
            {
                method: 'POST',
                url: 'https://api.restful-api.dev/objects',
                body: {
                    "name": "Dispositivo da laura 2",
                    "data": {
                           "year": 2024,
                           "price": 1000.99,
                           "CPU model": "Intel Core i7",
                           "Hard disk size": "1 TB"
                        }
                     
                }
            }
        )
        .then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.name).to.equal("Dispositivo da laura 2")

        })

    })
})