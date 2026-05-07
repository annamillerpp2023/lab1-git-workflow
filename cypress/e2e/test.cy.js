describe('Calculator test', () => {

it('adds two numbers', () => {

cy.visit('index.html')

cy.get('#num1').type('5')

cy.get('#num2').type('3')

cy.contains('Add').click()

cy.get('#result').should('contain', '8')

})

})