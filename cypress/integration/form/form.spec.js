describe('Register', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/simple-form')
    })
    it('Valid fields', () => {
        cy.get('[data-test=name]')
            .type('José Gabriel');
        cy.get('[data-test=lastname]')
            .type('Condorcanqui Noguera');
        cy.get('[data-test=address]')
            .type('Ciudad del Cuzco');
        cy.get('[data-test=email]')
            .type('tupacsito@gmail.com');
        cy.get('[data-test=phone]')
            .type('958392839');
        cy.get('[data-test=code]')
            .type('4353');
        cy.get('[data-test=date]')
            .type('1738-03-19');
        cy.get('[data-test=button-create]')
            .click();
    });
    it('Invalid fields', () => {
        cy.get('[data-test=button-create]')
            .click();
        cy.get('[data-test=error]').should('have.length', 7);
    });
})