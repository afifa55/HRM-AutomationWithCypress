export class EmployeePage{

    weblocators={

        employeeCode:'#employeeCode',
        employeeName: '#employeeText',
        searchbutton:'.justify-center.whitespace-nowrap',

    }

    clickEmployeeMenu(){
        cy.contains('Employee').click()
    }
    enterEmployeeCode(employeeCode){
        cy.get(this.weblocators.employeeCode).type(employeeCode)
    }
    clicksearchbutton(){
        cy.get(this.weblocators.searchbutton).eq(1).click()
    }
    clearEmployeeCodeAfterDelay(delay = 5000) {
        cy.wait(delay)
        cy.get(this.weblocators.employeeCode).clear()
    }
    enterName(name){
        cy.get(this.weblocators.employeeName).type(name)

    }
    clearEmployeeNameAfterDelay(delay = 5000) {
        cy.wait(delay)
        cy.get(this.weblocators.employeeName).clear()
    }

}