import {login} from "./partials/login.cy.js"
import { MyInfo } from "./partials/Contact.cy.js";
import { MyInfo1 } from "./partials/myinfo_personal.cy.js";
import { changePassword } from "./partials/changepassword.cy.js";
import { aboutus }  from "./partials/about.cy.js";
import { dashoardcheck } from "./partials/dashboard.cy.js";
import { logouttheaccount } from "./partials/logout.cy.js";
import { searches } from "./partials/search.cy.js";
import 'cypress-file-upload';

const log = new login()
const myInfo = new MyInfo();
const myInfo1 = new MyInfo1();
describe("OrangeHRM",()=>{
beforeEach(()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.wait(3000)
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('exist')
    log.enterUsername("Admin")
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value','Admin')
    cy.log("Username Matched")
    cy.wait(1000)
    log.enterPassword("admin123")
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value','admin123')
    cy.wait(1000)
    cy.log("Password Matched")
    cy.get('.oxd-button').should('be.visible')
    log.clickthebutton()
    cy.wait(1500)

})
afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.screenshot(`failure-screenshot-${this.currentTest.title}`);
    }
  });
it("Verify Dashboard",()=>{
    dashoardcheck()
})

it('About Section',()=>{
    aboutus()
})
it('Search',()=>{
    searches()
})
it('Change Password',()=>{
    cy.get('.oxd-userdropdown-tab').click()
    cy.wait(1000)
    cy.get('.oxd-dropdown-menu').find('li').then(($li)=>{
    cy.wait(1000)
    expect($li).to.have.length(4)
    })
    cy.wait(1000)
    cy.get(':nth-child(3) > .oxd-userdropdown-link').should('have.text','Change Password')
    cy.log("Menu Loaded")
    cy.wait(1000)
    cy.get(':nth-child(3) > .oxd-userdropdown-link').click()
    cy.wait(1000)
    cy.get('.orangehrm-card-container').should('be.visible')
    changePassword('admin123', 'admin1234','admin1234');

})
it('My Info_Personal', () => {
    myInfo1.navigateToMyInfo();
    
    myInfo1.verifyMyInfoPage();
    
    myInfo1.updatePersonalDetails('Ahmed', 'Hayat', '');
    myInfo1.updateOtherDetails(11111,22222,33333,'2025-08-28','p','Married'); 
    myInfo1.updateBloodTypeAndHeight('B+', '12');

    myInfo1.saveChanges();
    
})
it('My Info_Contact',()=>{
    myInfo.openMyInfo();
    myInfo.openContactTab();
    
    myInfo.addContactInfo("MY Family", "MY Friend", "+9211111111", "+92222222222","+923333333333");

    myInfo.deleteContact();
})
it('Logout',()=>{
    logouttheaccount()
})

})
