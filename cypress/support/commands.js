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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Limpa todas as tarefas antes de iniciar os testes
Cypress.Commands.add('deleteAllTasks', () => {
    cy.get('ul li').then(($items) => {
    console.log(`Found ${$items.length} tasks to delete`);
      if ($items.length) {
        cy.wrap($items).each(($el) => {
          cy.wrap($el).find('button').click({ force: true });
          cy.contains($el.text()).should('not.exist');
        });
      }
    });
});