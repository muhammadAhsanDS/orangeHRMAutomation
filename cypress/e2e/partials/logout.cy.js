export const logouttheaccount=()=>{
    cy.get('.oxd-userdropdown-tab').click()
    cy.wait(1000)
    cy.get('.oxd-dropdown-menu').find('li').then(($li)=>{
    cy.wait(1000)
    expect($li).to.have.length(4)
    })
    cy.wait(1000)
    cy.get('.oxd-dropdown-menu').should('be.visible')
    cy.wait(1000)
    cy.get(':nth-child(4) > .oxd-userdropdown-link').should('have.text','Logout')
    cy.log("Menu Loaded")
    cy.wait(1000)
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
    cy.wait(1000)
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(1000)
    cy.log("Successfully Logged Out")

}