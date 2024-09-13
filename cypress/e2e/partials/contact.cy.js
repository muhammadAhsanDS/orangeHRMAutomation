export class MyInfo {
    openMyInfo() {
        cy.get(':nth-child(6) > .oxd-main-menu-item').should('be.visible')
        cy.wait(1000)
        cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').should('have.text', 'My Info')
        cy.wait(1000)
        cy.get(':nth-child(6) > .oxd-main-menu-item').click()
        cy.wait(1000)
    }

    openContactTab() {
        cy.get(':nth-child(3) > .orangehrm-tabs-item').should('be.visible')
        cy.wait(1000)

        cy.get(':nth-child(3) > .orangehrm-tabs-item').click()
        cy.wait(1000)
    }

    addContactInfo(familyName, friendName, phone1,phone2,phone3) {
        cy.get(':nth-child(1) > .orangehrm-action-header > .oxd-button').should('be.visible').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').should('exist')
        cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type(familyName, { delay: 300 })
        cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value', familyName)
        cy.wait(1000)
        cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('exist')
        cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type(friendName, { delay: 300 })
        cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value', friendName)
        cy.wait(1000)

        cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type(phone1, { delay: 300 })
        cy.wait(1000)
        cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type(phone2, { delay: 300 })
        cy.wait(1000)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type(phone3, { delay: 300 })
        cy.get('.oxd-button--secondary').should('be.visible').click({ delay: 200 })
        cy.wait(4000)
    }

    deleteContact() {
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(1)').should('be.visible').click( )
        cy.wait(1000)

        cy.get('.oxd-button--label-danger').should('be.visible').click( )
        cy.wait(1000)

        cy.log("Contact Information Deleted")
    }
}
