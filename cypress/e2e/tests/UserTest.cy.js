import { AdminLoginPage } from "../../Pages/AdminLogin"
import { UserPage } from "../../Pages/User"
import loginData from '../../fixtures/loginData.json'
import userData from '../../fixtures/userData.json'

const userobj= new UserPage()
const loginObj= new AdminLoginPage()

describe('User Page',()=>{

        beforeEach('Login',()=>{

        loginObj.login(loginData.Workemail, loginData.Password)
        loginObj.VerifySuccessMsg()
    })

    it('Search by EmployeeCode',()=>{
        userobj.clickUserMenu()
        userobj.enterEmployeeCode(userData.searchEmployeeCode.EmployeeCode)
        userobj.clicksearchbutton()
        userobj.clearEmployeeCodeAfterDelay()
        userobj.clicksearchbutton()

    })
})