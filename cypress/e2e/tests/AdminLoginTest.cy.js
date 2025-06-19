import { AdminLoginPage } from '../../Pages/AdminLogin'
import loginData from '../../fixtures/loginData.json'
const loginObj= new AdminLoginPage()

describe('Admin Login of NybSys HRM',()=>{

    it('Login Flow',()=>{

        loginObj.login(loginData.Workemail, loginData.Password)
        loginObj.VerifySuccessMsg()

    })
})