describe('ALL Login Tests', () => {
    
   
    it('login1', () => {

    
        cy.visit('https://opensource-demo.orangehrmlive.com')
  
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
  
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
  
  
        cy.get('.oxd-button').click()

    

    })



    it('login2', () => {

    
        cy.visit('https://opensource-demo.orangehrmlive.com')
  
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('35dmin')
  
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
  
  
        cy.get('.oxd-button').click()
    
        
    })
    it('login3', () => {

    
        cy.visit('https://opensource-demo.orangehrmlive.com')
  
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
  
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
  
  
        cy.assert('.oxd-button').click()

    
  })
})
