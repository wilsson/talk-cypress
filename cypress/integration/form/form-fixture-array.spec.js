describe('Register', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/simple-form')
    })
    it('Valid fields', () => {
        cy.fixture('register-array.json')
            .then(({ data }) => {
                data.forEach((field) => {
                    cy.get(`[data-test=${field.name}]`)
                        .type(field.value);
                })
            });
    })
})