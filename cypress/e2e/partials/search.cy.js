export const searches = () => {
    cy.get('.oxd-main-menu-search').should('be.visible')
    cy.log("Search Box Loaded")
    cy.wait(1000)
    cy.get('.oxd-input').type('My Info{Enter}')
    cy.wait(1000)
    cy.get('.oxd-main-menu-item').should('be.visible')
    cy.wait(1000)
    cy.get('.oxd-main-menu-item > .oxd-text').should('have.text','My Info')
    cy.wait(1000)
    cy.log("Search Result Loaded")
    cy.get('.oxd-main-menu-item').click()
}