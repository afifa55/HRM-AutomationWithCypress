import { EmployeePage } from "../../Pages/Employee"
import employeeData from "../../fixtures/employeeData.json"
import { AdminLoginPage } from '../../Pages/AdminLogin'
import loginData from '../../fixtures/loginData.json'

const loginObj= new AdminLoginPage()
const employeeObj= new EmployeePage()

describe('Employee Page',()=>{

    beforeEach('Login',()=>{

        loginObj.login(loginData.Workemail, loginData.Password)
        loginObj.VerifySuccessMsg()
    })


    it('Search by EmployeeCode, wait and search again',()=>{

        employeeObj.clickEmployeeMenu()
        employeeObj.enterEmployeeCode(employeeData.searchEmployeeCode.EmployeeCode)
        employeeObj.clicksearchbutton()
        employeeObj.clearEmployeeCodeAfterDelay()
        employeeObj.clicksearchbutton()

    })

    it('Search by Name',()=>{
        employeeObj.clickEmployeeMenu()
        employeeObj.enterName(employeeData.searchName.Name)
        employeeObj.clicksearchbutton()
        employeeObj.clearEmployeeNameAfterDelay()
        employeeObj.clicksearchbutton()
    })
})