import { AdminLoginPage } from '../../Pages/AdminLogin'
import loginData from '../../fixtures/loginData.json'
const loginObj= new AdminLoginPage()

describe('Admin Login of NybSys HRM',()=>{

    it('Login Flow',()=>{

        loginObj.openUrl()
        loginObj.enterWorkmail(loginData.Workemail)
        loginObj.enterPassword(loginData.Password)
        loginObj.clickEyeButton()
        loginObj.clickLogIn()
        loginObj.VerifySuccessMsg()

    })
})