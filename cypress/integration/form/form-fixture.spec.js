describe('Register', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/simple-form')
    })
    it('Valid fields', () => {
        cy.fixture('register.json')
            .then((data) => {
                cy.get('[data-test=name]')
                    .type(data.name);
                cy.get('[data-test=lastname]')
                    .type(data.lastname);
                cy.get('[data-test=address]')
                    .type(data.address);
                cy.get('[data-test=email]')
                    .type(data.email);
                cy.get('[data-test=phone]')
                    .type(data.phone);
                cy.get('[data-test=code]')
                    .type(data.code);
                cy.get('[data-test=date]')
                    .type(data.date);
            });
    })
})