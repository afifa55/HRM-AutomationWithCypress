describe('HRM Login Page',()=>{

    it('Login',()=>{
    cy.visit('https://practice.expandtesting.com/dropdown')
    cy.get('#dropdown').select('Option 2')
    cy.get('.form-control option:selected').select('20')
    cy.get('#country').select('Bangladesh').should('have.value','BD')
    })

})
