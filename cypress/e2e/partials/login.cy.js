export class login{
    enterUsername(username){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type(username, { delay: 30 });     
    }
    enterPassword(passit){
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(passit, { delay: 50 })
    }
    clickthebutton(){
    cy.get('.oxd-button').should('be.visible')
    cy.get('.oxd-button').click()
    }
    
    }