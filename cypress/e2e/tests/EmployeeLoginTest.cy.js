import { EmployeePage } from "../../Pages/Employee"
import employeeData from "../../fixtures/employeeData.json"
import { AdminLoginPage } from '../../Pages/AdminLogin'
import loginData from '../../fixtures/loginData.json'

const loginObj= new AdminLoginPage()
const employeeObj= new EmployeePage()

describe('Employee Page',()=>{

    before('Login',()=>{

        loginObj.login(loginData.Workemail, loginData.Password)
    })


    it('Search by Employee',()=>{

        employeeObj.clickEmployeeMenu()
        employeeObj.enterEmployeeCode(employeeData.EmployeeCode)
        employeeObj.clicksearchbutton()

    })
})