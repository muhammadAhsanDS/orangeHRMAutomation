// cypress/support/passwordHelper.js

export const changePassword = (currentPassword, newPassword,newPassword1) => {
    cy.wait(1000);
    cy.get('.orangehrm-card-container').should('be.visible');
    
    cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label')
      .should('have.text', 'Current Password');
      cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('exist')      
    cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
      .should('be.visible', { delay: 300 })
      .type(currentPassword)
      .should('have.value', currentPassword, { delay: 300 });
  
    cy.get('.user-password-cell > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label')
      .should('have.text', 'Password');
      cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input')
      .should('be.visible')
      .type(newPassword, { delay: 300 });
  
    cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label')
      .should('have.text', 'Confirm Password');
    cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
      .should('be.visible')
      .type(newPassword1, { delay: 300 });
      cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value', newPassword);
    cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value', newPassword);
  
    cy.get('.oxd-button--secondary').should('be.visible').should('be.enabled');
    cy.wait(1000);
    cy.log("Password Entered and button enabled");
  
    cy.get('.oxd-button--ghost').should('be.visible').click();
  };
  
  