describe('template spec', () => {
    it('Login', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('[href="https://automationteststore.com/index.php?rt=account/login"]').first().click();
        
        //Login
        cy.get('#loginFrm_loginname').type('portal464741');
        cy.get('#loginFrm_password').type('Password');
        cy.get('[title="Login"]').click();

        //Check if a user is logged in
        cy.get('.myaccountbox');
    })
})