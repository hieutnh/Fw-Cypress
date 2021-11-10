import { naviagtionPage2 } from "../../support/pageObject/naviagtion2"


describe ('Test with page object2',() => {

    beforeEach("Open application",() =>{
        cy.OpenWebTest()
    })

    it("Open Sign in page2",() =>{
       naviagtionPage2.clickButtonLoginPage()
       naviagtionPage2.inputEmail()
       naviagtionPage2.inputPassword()
       naviagtionPage2.clickButtonLogin()
    })

})
