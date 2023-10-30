describe('template spec', () => {
  it('Registration', () => {
    cy.visit('https://automationteststore.com/');
    cy.get('[href="https://automationteststore.com/index.php?rt=account/login"]').first().click();
    cy.get('[title="Continue"]').click();

    //Registration 
    cy.get('#AccountFrm_firstname').type('userFirstName');
    cy.get('#AccountFrm_lastname').type('userLastName');
    cy.get('#AccountFrm_email').type('emailqwe6@gmail.com');
    cy.get('#AccountFrm_telephone').type('0123456789');
    cy.get('#AccountFrm_fax').type('9876543210');
    cy.get('#AccountFrm_company').type('Company');
    cy.get('#AccountFrm_address_1').type('Address1');
    cy.get('#AccountFrm_address_2').type('Address2');
    cy.get('#AccountFrm_city').type('City');
    cy.get('#AccountFrm_postcode').type('12345');
    cy.get('[name="country_id"]').select('Panama').should('have.value', '164');
    cy.get('[name="zone_id"]').select('Herrera').should('have.value', '2484');
    cy.get('#AccountFrm_loginname').type('portal464741');
    cy.get('#AccountFrm_password').type('Password');
    cy.get('#AccountFrm_confirm[type="password"]').type('Password');
    cy.get('#AccountFrm_newsletter1').check();
    cy.get('#AccountFrm_agree').check();
    cy.get('.btn.btn-orange.pull-right.lock-on-click').click();

    //Logout
    cy.get('.btn.btn-default.mr10').click();
    cy.get('.side_account_list [href="https://automationteststore.com/index.php?rt=account/logout"]').click();
  })
}) 

