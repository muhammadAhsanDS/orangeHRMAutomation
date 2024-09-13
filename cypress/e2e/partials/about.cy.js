export const aboutus=()=>{
    cy.get('.oxd-userdropdown-tab').click()
    cy.wait(1000)
    cy.get('.oxd-dropdown-menu').find('li').then(($li)=>{
    cy.wait(1000)
    expect($li).to.have.length(4)
    })
    cy.wait(1000)
    cy.get(':nth-child(1) > .oxd-userdropdown-link').should('have.text','About')
    cy.log("Menu Loaded")
    cy.wait(1000)
    cy.get(':nth-child(1) > .oxd-userdropdown-link').click()
    cy.wait(1000)
    cy.get('.oxd-dialog-container-default--inner > .oxd-sheet').should('be.visible')
    cy.wait(1000)
    cy.log("About Page Loaded")
    cy.get('.orangehrm-modal-header > .oxd-text').should('have.text','About')
    cy.wait(1000)
    cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-text').should('have.text','OrangeHRM')
    cy.wait(1000)
    cy.get('.oxd-grid-2 > :nth-child(4) > .oxd-text').should('have.text','OrangeHRM OS 5.7')
    cy.wait(1000)
    cy.log("Company Information Verified")
}