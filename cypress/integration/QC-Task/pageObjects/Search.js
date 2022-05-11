class Search
{
visit()
{
    cy.visit('https://www.google.com/')
}
Search(data)
{
    const searchFeild = cy.get('.gLFyf', { timeout: 5000 })
    searchFeild.clear()
    searchFeild.type(data)
    return this
}

getFirstSearchResult()
{
    cy.get('#search a')
        .invoke('attr', 'href')
        .then((href) => console.log(href))
    return this
}
}
export default Search