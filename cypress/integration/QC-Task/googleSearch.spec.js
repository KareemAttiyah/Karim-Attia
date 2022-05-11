///  <reference types="Cypress" /> 

import Search from './pageObjects/Search'

describe('Google Search ', function () {
    before(function () {
        const search = new Search

        search.visit()
        cy.fixture('example').then(function (data) {

            this.data = data
        })
        
    })


  
    it('searches for wikipedia on google', () => {
        const search = new Search
        search.visit()
        // search.Search(this.data.wiki) should work
        search.Search('Wikipedia{enter}')

    });

    it('gets first search result', () => {
        cy.get('#search a')
            .invoke('attr', 'href')
            .then((href) => console.log(href));
        cy.get('[href="https://www.wikipedia.org/"] > .TbwUpd > .iUh30 > span').should('be.visible')
        cy.get('[href="https://www.wikipedia.org/"] > .TbwUpd > .iUh30 > span').invoke('text').should('eq', 'https://www.wikipedia.org')
        cy.get(':nth-child(1) > .g > .jtfYYd > .jGGQ5e > .yuRUbf').click()
        // cy.wait(20000)
        // cy.url().should('eq','https://www.wikipedia.org/')

    });
    it('searches for Egypt on google', () => {
        const search = new Search
        search.visit()
        // search.Search(this.data.wiki) should work
        search.Search('Egypt{enter}')

    });

    it('gets first search result', () => {
        cy.get('#search a')
            .invoke('attr', 'href')
            .then((href) => console.log(href));
        cy.get('.I6TXqe').should('be.visible')
        cy.get('.qrShPb > span').should('be.visible').invoke('text').should('eq', 'مصر')
        // cy.get('[href="https://www.wikipedia.org/"] > .TbwUpd > .iUh30 > span').should('be.visible')
        // cy.get('[href="https://www.wikipedia.org/"] > .TbwUpd > .iUh30 > span').invoke('text').should('eq', 'https://www.wikipedia.org')
        // cy.get(':nth-child(1) > .g > .jtfYYd > .jGGQ5e > .yuRUbf').click()
        // cy.wait(20000)
        // cy.url().should('eq','https://www.wikipedia.org/')

    });
})

