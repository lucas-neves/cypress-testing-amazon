const locator = {
    btnManterEndereco: '[data-testid="Address_selectShipToThisAddress"]',
    btnFormaPagamento: '.pmts-boleto-icon-img',
    btnEscolherFormaPgto: '#orderSummaryPrimaryActionBtn input',
    btnFinalizarPedido: '#submitOrderButtonId',
    optPrazoEntrega: '.shipping-speeds input:visible',
}

class PagamentoPage {

    manterMesmoEndereco() {
        cy.intercept('GET', '**ContinuableStatusDisabled**').as('disableBtn')
        cy.get(locator.btnManterEndereco).click()
    }

    selecionarFormaBoleto() {
        cy.get(locator.btnEscolherFormaPgto).should('be.disabled')
        cy.wait('@disableBtn')
        cy.get(locator.btnFormaPagamento).click()
        cy.get(locator.btnEscolherFormaPgto).should('be.enabled').click()
    }

    finalizarPedido() {
        cy.get(locator.optPrazoEntrega).should('be.visible')
        cy.get(locator.btnFinalizarPedido).click()
    }
}

const pagamentoPage = new PagamentoPage()
export default pagamentoPage
