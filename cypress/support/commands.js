// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("uploadImage", (selector, imageName) => {
    cy.fixture(imageName)
        .then((image) => {
            cy.get(selector).then(($input) => {
                return Cypress.Blob.base64StringToBlob(image)
                    .then((blob) => {
                        const input = $input[0];
                        const testFile = new File([blob], imageName);
                        const dataTransfer = new DataTransfer();
                        dataTransfer.items.add(testFile);
                        input.files = dataTransfer.files;
                    })
            })
        })
});