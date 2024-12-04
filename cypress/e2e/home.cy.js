describe('Home Page', () => {
  it('should load, display the intro, and then show the main elements', () => {
    cy.visit('/')
    
    // Check if the intro is present
    cy.get('[data-testid="star-wars-intro"]', { timeout: 10000 }).should('be.visible')
    cy.contains('Episode I').should('be.visible')
    cy.contains('Technical Test', { timeout: 5000 }).should('be.visible')
    
    // Wait for the intro to complete or click the skip button
    cy.get('button').contains('Skip').click()
    
    // Check if the logo is present after intro
    cy.contains('STAR WARS', { timeout: 10000 }).should('be.visible')
    cy.contains('8-bit Explorer').should('be.visible')
    
    // Check if the main menu options are present
    cy.contains('Explore People').should('be.visible')
    cy.contains('Explore Planets').should('be.visible')
    cy.contains('Explore Starships').should('be.visible')
    cy.contains('Login').should('be.visible')
    
    // Test navigation to People page
    cy.contains('Explore People').click()
    cy.url().should('include', '/people')
    cy.contains('Star Wars People').should('be.visible')
    
    // Test navigation to Planets page
    cy.contains('Planets').click()
    cy.url().should('include', '/planets')
    cy.contains('Star Wars Planets').should('be.visible')
    
    // Test navigation to Starships page
    cy.contains('Starships').click()
    cy.url().should('include', '/starships')
    cy.contains('Star Wars Starships').should('be.visible')
  })
})

