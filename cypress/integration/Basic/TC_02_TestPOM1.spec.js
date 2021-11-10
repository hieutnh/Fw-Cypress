import { naviagtionPage } from "../../support/pageObject/naviagtionPageObject"
import { signinPage } from "../../support/pageObject/signinWithAccountBasic"


describe ('Test with page object',() => {

    beforeEach("Open application",() =>{
        cy.OpenWebTest()
    })

    it("Open Sign in page",() =>{
        naviagtionPage.openSinginPage()
        cy.wait(1000)
        // signinPage.loginAccount()
        cy.LoginWithUser()
    })

})
