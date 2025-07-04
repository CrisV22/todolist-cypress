import '../support/commands';

describe('Criação de lembretes rápidos por uma mãe durante as tarefas domésticas', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve permitir adicionar a tarefa "Ligar para o pediatra" com sucesso', () => {
    // Preenche o campo de nova tarefa com o lembrete
    cy.get('#nome-todo')
      .should('be.visible')
      .type('Ligar para o pediatra');

    // Clica no botão de adicionar
    cy.get('#add-button')
      .should('be.enabled')
      .click();

    // Verifica se a tarefa foi adicionada corretamente
    cy.contains('Ligar para o pediatra')
      .should('exist')
      .and('be.visible');
  });

  it('Deve permitir excluir uma tarefa adicionada por engano', () => {
    // Preenche o campo de nova tarefa com o lembrete
    cy.get('#nome-todo')
      .type('*@%$');

    // Clica no botão de adicionar
    cy.get('#add-button')
      .should('be.enabled')
      .click();

    // Aguardando adição da tarefa
    cy.contains('*@%$')
      .should('exist');

    // Exclui a tarefa
    cy.get('[aria-label="Excluir *@%$"]')
      .click();

    // Verifica se foi removida
    cy.contains('*@%$')
      .should('not.exist');
  });

  after(() => {
    cy.deleteAllTasks();
  });
});
