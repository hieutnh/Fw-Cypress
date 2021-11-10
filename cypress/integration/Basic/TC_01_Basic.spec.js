/// <reference types="cypress" />
describe ('Out first testcase',() => {

        beforeEach("Open application",() =>{
            cy.visit("/")
        })

        it('Test with normal', () =>{      
        cy.xpath("//a[normalize-space()='Sign in']").click()
        cy.xpath("//input[@placeholder='Email']").type("test1ne@gmail.com")
        cy.xpath("//input[@placeholder='Password']").type("123123")
        cy.get("form").find("button").click()
    })
})