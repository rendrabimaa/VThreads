/**
 * - Register spec
 *   - should display register page correctly
 *   - should display alert when email is empty
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when username and password are wrong
 *   - should display login page when username, email, and password succeed to register
 */

describe('Register spec', () => {
  
    beforeEach(() => {
      cy.visit('http://localhost:5173/auth/register');
    });
  
    it('should display register page correctly', () => {
      cy.get('input[placeholder="Input your Email here ..."]').should('be.visible');
      cy.get('input[placeholder="Input your Name here ..."]').should('be.visible');
      cy.get('input[placeholder="Input your Password here ..."]').should('be.visible');
      cy.get('button').contains(/^Register Now$/).should('be.visible');
    });
  
    it('should display alert when name is empty', () => {
        cy.get('input[placeholder="Input your Email here ..."]').type('test@gmail.com');
        cy.get('input[placeholder="Input your Password here ..."]').type('wrong_password');
      cy.get('button').should('be.visible').contains(/^Register Now$/).click();
   
      cy.on('window:alert', (str) => {
        expect(str).to.equal('"name" is not allowed to be empty');
      });
    });

    it('should display alert when email is empty', () => {
        cy.get('input[placeholder="Input your Name here ..."]').type('name');
        cy.get('input[placeholder="Input your Password here ..."]').type('wrong_password');
      cy.get('button').should('be.visible').contains(/^Register Now$/).click();
   
      cy.on('window:alert', (str) => {
        expect(str).to.equal('"email" is not allowed to be empty');
      });
    });
    
    it('should display alert when password is empty', () => {
        cy.get('input[placeholder="Input your Email here ..."]').type('test@gmail.com');
        cy.get('input[placeholder="Input your Name here ..."]').type('name');
      cy.get('button').should('be.visible').contains(/^Register Now$/).click();
   
      cy.on('window:alert', (str) => {
        expect(str).to.equal('"password" is not allowed to be empty');
      });
    });
    
    it('should display alert when email not valid', () => {
        cy.get('input[placeholder="Input your Email here ..."]').type('test@gmail');
        cy.get('input[placeholder="Input your Name here ..."]').type('name');
        cy.get('input[placeholder="Input your Password here ..."]').type('wrong_password');
      cy.get('button').should('be.visible').contains(/^Register Now$/).click();
   
      cy.on('window:alert', (str) => {
        expect(str).to.equal('"email" must be a valid email');
      });
    });

    it('should display alert when password less than 6 characters long', () => {
        cy.get('input[placeholder="Input your Email here ..."]').type('test@gmail');
        cy.get('input[placeholder="Input your Name here ..."]').type('name');
        cy.get('input[placeholder="Input your Password here ..."]').type('wrong');
      cy.get('button').should('be.visible').contains(/^Register Now$/).click();
   
      cy.on('window:alert', (str) => {
        expect(str).to.equal('password must be at least 6 characters long');
      });
    });

     it('should display login page when email and password are correct', () => {
      cy.get('input[placeholder="Input your Email here ..."]').type('wakwaw@gmail.com');
      cy.get('input[placeholder="Input your Name here ..."]').type('wakwaw');
      cy.get('input[placeholder="Input your Password here ..."]').type('wakwaw1234');
   
      cy.get('button').contains(/^Register Now$/).click();
   
      cy.get('h4').contains('Login').should('be.visible');
      cy.get('button').contains(/^Login Now$/).should('be.visible');
    });
  });