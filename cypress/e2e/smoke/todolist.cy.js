import '../support/commands';

describe('Quick reminder creation by a mother during household chores @S4068ba9d', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should allow adding the task "Call the pediatrician" successfully @Tf3c6c963', () => {
    // Fill in the new task field with the reminder
    cy.get('#nome-todo')
      .should('be.visible')
      .type('Call the pediatrician');

    // Click the add button
    cy.get('#add-button')
      .should('be.enabled')
      .click();

    // Check if the task was added correctly
    cy.contains('Call the pediatrician')
      .should('exist')
      .and('be.visible');
  });

  it('Should allow deleting a task added by mistake @Tcd5458d2', () => {
    // Fill in the new task field with the reminder
    cy.get('#nome-todo')
      .type('*@%$');

    // Click the add button
    cy.get('#add-button')
      .should('be.enabled')
      .click();

    // Wait for the task to be added
    cy.contains('*@%$')
      .should('exist');

    // Delete the task
    cy.get('[aria-label="Excluir *@%$"]')
      .click();

    // Check if it was removed
    cy.contains('*@%$')
      .should('not.exist');
  });

  after(() => {
    cy.deleteAllTasks();
  });
});
