const locator = {
    btnFecharPedido: '[data-feature-id="proceed-to-checkout-action"]',
}

class CarrinhoPage {

    fecharPedido() {
        cy.get(locator.btnFecharPedido).click()
    }
}

const carrinhoPage = new CarrinhoPage()
export default carrinhoPage
