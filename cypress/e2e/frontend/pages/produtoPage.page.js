const locator = {
    btnAdicionarProduto: '#add-to-cart-button',
}

class ProdutoPage {

    adicionarProdutoCarrinho() {
        cy.get(locator.btnAdicionarProduto).click()
    }
}

const produtoPage = new ProdutoPage()
export default produtoPage
