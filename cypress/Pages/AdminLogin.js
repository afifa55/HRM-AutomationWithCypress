export class AdminLoginPage{
    weblocators={
        
        workEmail:'#email',
        password:'[id=password]',
        eyeButton:'.lucide.lucide-eye',
        logInButton:'[type="submit"]'

    }

    openUrl(){
        cy.visit(Cypress.env('URL'))
        }

    enterWorkmail(email){
        cy.get(this.weblocators.workEmail).type(email)
    }
    enterPassword(Password){
        cy.get(this.weblocators.password).type(Password)
    }
    clickEyeButton(){
        cy.get(this.weblocators.eyeButton).click()
    }
    clickLogIn(){
        cy.get(this.weblocators.logInButton).click()
    }
    VerifySuccessMsg(){
        cy.contains('Welcome to the HR Management System.').should('be.visible')
    }

    login(email, password) {
        this.openUrl()
        this.enterWorkmail(email)
        this.enterPassword(password)
        this.clickEyeButton()
        this.clickLogIn()
    }


}