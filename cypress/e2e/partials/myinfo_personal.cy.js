export class MyInfo1 {
    
    navigateToMyInfo() {
        cy.get(':nth-child(6) > .oxd-main-menu-item').should('be.visible').click();
        cy.wait(1000);
    }

    verifyMyInfoPage() {
        cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').should('have.text', 'My Info');
        cy.get('.orangehrm-edit-employee-content > :nth-child(1)').should('be.visible');
        cy.get('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6').should('have.text', 'Personal Details');
        cy.wait(1000);
    }

    updatePersonalDetails(firstName, lastName, middleName) {
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').should('exist')
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type(`{selectall}{backspace}${firstName}`, { delay: 300 }).should('have.value', firstName);
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').should('exist')
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('{selectall}{backspace}');
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').should('exist')
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type(`{selectall}{backspace}${lastName}`, { delay: 300 }).should('have.value', lastName);
        cy.wait(1000);
    }
    updateOtherDetails(empid,otherid,drivlicense,licenseExpiryDara,nationality,martialstatus,dob) {
        cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').should('exist')
        cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(`{selectall}{backspace}${empid}`, { delay: 300 });
        cy.wait(1000);
        cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('exist')
        cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(`{selectall}{backspace}${otherid}`, { delay: 300 });
        cy.wait(1000);
        cy.get(':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').should('exist')
        cy.get(':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(`{selectall}{backspace}${drivlicense}`, { delay: 300 });
        cy.wait(1000);
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').should('exist')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').type(`{selectall}{backspace}${licenseExpiryDara}`, { delay: 300 });
        cy.wait(1000);
        cy.get('.--close').click()
        cy.wait(1000);
        cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').should('exist')        
        cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').type(`${nationality}{Enter}`, { delay: 300 });
        cy.wait(1000);
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').should('exist')        
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click();
        cy.wait(300)
        cy.contains(martialstatus).click();
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
        cy.wait(1000);
        cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').should('be.visible')
        cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
        cy.wait(3000);
        cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click()
        cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').should('be.visible')
        cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
        cy.wait(3000);
    }

    saveChanges() {
        cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').should('be.visible').should('not.be.disabled').click();
        cy.wait(2000);
    }

    updateBloodTypeAndHeight(bloodType, Test_Field) {
        cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').should('exist');
        cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
        cy.contains(bloodType).click();
        cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('exist');        
        cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(`{selectall}{backspace}${Test_Field}`, { delay: 300 });
        cy.wait(1000);
    }
}
