describe('Product', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/product');
    })
    it('create', () => {
        cy.get('[data-test=name]')
            .type('webpack - test');
        cy.uploadImage('[data-test=image]', 'webpack.png');
        cy.get('[data-test=image-src]')
            .should('have.attr', 'src', 'http://localhost:3000/webpack.png')
            .then(() => {
                cy.get('[data-test=button-create]')
                    .click();
            });
    })
})