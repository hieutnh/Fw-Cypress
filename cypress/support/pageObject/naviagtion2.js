

export class naviagtionPageObject2 {
    element = {
        elementLogin: (values) => cy.xpath("//a[normalize-space()='"+ values +"']"),
        dynamicLocator: (valueEmail) => cy.xpath("//input[@placeholder='"+ valueEmail +"']"),
        buttonLogin: () => cy.xpath("//button[normalize-space()='Sign in1']")

        
    }

    clickButtonLoginPage(){
        this.element.elementLogin("Sign in").click();
    }

    inputEmail(){
        this.element.dynamicLocator("Email").type(Cypress.env("username"));
    }

    inputPassword(){
        this.element.dynamicLocator("Password").type(Cypress.env("password"));
    }

    clickButtonLogin(){
        this.element.buttonLogin().click();
    }
}      



export const naviagtionPage2 = new naviagtionPageObject2