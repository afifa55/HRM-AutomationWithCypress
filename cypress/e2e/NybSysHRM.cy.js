describe('HRM Admin',()=>{
    //login
    it('Login',()=>{
    cy.visit('http://13.214.1.75:47/login')
    cy.get('#email').type('admin@nybsys.com')
    cy.get('[id=password]').type('123456')
    cy.get('.lucide.lucide-eye').click()
    cy.get('[type="submit"]').click()
    cy.contains('Welcome to the HR Management System.')
    //Add Employee
     cy.contains('Employee').click()
    // cy.get('.justify-center.whitespace-nowrap').eq(2).click()
    // cy.get('[data-slot="select-value"]').eq(1)

    //Selcet Department
    cy.contains('-- Select Dept. --').select('CDAS')
    })

})

describe('practice',()=>{

    it('Login',()=>{
    cy.visit('https://practice.expandtesting.com/dropdown')
    cy.get('#dropdown').select('Option 2')
    cy.get('.form-control option:selected').select('20')
    cy.get('#country').select('Bangladesh').should('have.value','BD')
    })

})