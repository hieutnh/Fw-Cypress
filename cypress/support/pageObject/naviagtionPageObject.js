
function dynamicValue(values){
    cy.xpath("//a[normalize-space()='"+ values +"']").click()
}

export class naviagtionPageObject {
    openSinginPage(){
        dynamicValue("Sign in")
}      

}

export const naviagtionPage = new naviagtionPageObject