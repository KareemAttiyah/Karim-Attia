describe('Medium Search', () => {
    it('loads search page', () => {
        cy.visit('https://www.medium.com');
    });

    it('searches for `remarkablemark`', () => {
        cy.get('input[name="q"]').type('remarkablemark{enter}');
    });

    it('gets first search result', () => {
        cy.get('#search a')
            .invoke('attr', 'href')
            .then((href) => console.log(href));
    });
});

