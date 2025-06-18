export class EmployeePage{

    weblocators={

        //employeeMenu:'',
        employeeCode:'#employeeCode',
        searchbutton:'.justify-center.whitespace-nowrap'
    }

    clickEmployeeMenu(){
        cy.contains('Employee').click()
    }
    enterEmployeeCode(employeeCode){
        cy.get(this.weblocators.employeeCode).eq(2).type(employeeCode)
    }
    clicksearchbutton(){
        cy.get(this.weblocators.searchbutton).click()
    }
}