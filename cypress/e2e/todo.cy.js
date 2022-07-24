context('TodoMVC', () => {
    it('Adicionar uma nova tarefa', () => {
        cy.visit('https://todomvc-app-for-testing.surge.sh/')
        
        cy.get('input.new-todo').type('Estudar Cypress {enter}')

        cy.get('ul.todo-list li').should('have.length', 1)
    });
});