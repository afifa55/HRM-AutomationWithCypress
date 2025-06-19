export class UserPage{

    weblocators={

        employeeCode: '#employeeCode',
        searchButton:'.justify-center.whitespace-nowrap'
    }

    clickUserMenu(){
        cy.contains('User').click()
    }
    enterEmployeeCode(employeeCode){
        cy.get(this.weblocators.employeeCode).type(employeeCode)
    }
    clicksearchbutton(){
        cy.get(this.weblocators.searchButton).eq(1).click()
    }
    clearEmployeeCodeAfterDelay(delay = 5000) {
        cy.wait(delay)
        cy.get(this.weblocators.employeeCode).clear()
    }

}