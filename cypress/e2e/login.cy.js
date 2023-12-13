/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when username is empty
 *   - should display alert when password is empty
 *   - should display alert when username and password are wrong
 *   - should display homepage when username and password are correct
 */

describe('Login spec', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:5173/auth/login');
  });

  it('should display login page correctly', () => {
    cy.get('input[placeholder="Input your Email here ..."]').should('be.visible');
    cy.get('input[placeholder="Input your Password here ..."]').should('be.visible');
    cy.get('button').contains(/^Login Now$/).should('be.visible');
  });

  it('should display alert when email is empty', () => {
    cy.get('button', { timeout: 10000 }).should('be.visible').contains(/^Login Now$/).click();
 
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    cy.get('input[placeholder="Input your Email here ..."]').type('test@test.com');
 
    cy.get('button').contains(/^Login Now$/).click();
 
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when email and password are wrong', () => {
    cy.get('input[placeholder="Input your Email here ..."]').type('testuser@test.com');
 
    cy.get('input[placeholder="Input your Password here ..."]').type('wrong_password');
 
    cy.get('button').contains(/^Login Now$/).click();
 
    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong');
    });
  });

  it('should display homepage when email and password are correct', () => {
    cy.get('input[placeholder="Input your Email here ..."]').type('dhea@gmail.com');
 
    cy.get('input[placeholder="Input your Password here ..."]').type('dhea1234');
 
    cy.get('button').contains(/^Login Now$/).click();
 
    cy.get('nav').should('be.visible');
    cy.get('button').contains('Click here to Post Something').should('be.visible');
  });
});