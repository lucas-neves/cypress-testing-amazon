const locator = {
    headerLogin: '#nav-link-accountList-nav-line-1',
    inputEmail: '#ap_email',
    btnContinuar: 'span#continue',
    inputSenha: '#ap_password',
    btnLogin: '#signInSubmit',
    btnPularConfirm: '#ap-account-fixup-phone-skip-link',
    
    inputProdutoPesq: '#twotabsearchtextbox',
    lblResultProduto: '.s-suggestion-container',
    lblResultados: '[data-cel-widget="search_result_1"]:contains(RESULTADOS)',
    divsProdutos: '.sg-col-inner .s-image',
}

class HomePage {

    login() {
        cy.visit('/')
        cy.get(locator.headerLogin).click()
        cy.get(locator.inputEmail).type('scan.teste.2019@gmail.com')
        cy.get(locator.btnContinuar).click()
        cy.get(locator.inputSenha).type('Scansource2022')
        cy.get(locator.btnLogin).click()
        // cy.get(locator.btnPularConfirm).click()
    }

    pesquisaProduto(produto) {
        cy.get(locator.inputProdutoPesq).type(produto)
        cy.contains(locator.lblResultProduto, produto.toLowerCase()).click()
        cy.get(locator.lblResultados).should('be.visible')
            .next('div')
            .find(locator.divsProdutos)
            .first()
            .click()
    }
}

const homepage = new HomePage()
export default homepage
