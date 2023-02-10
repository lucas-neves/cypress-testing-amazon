/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import homePage from '../../e2e/frontend/pages/homePage.page'
import produtoPage from '../../e2e/frontend/pages/produtoPage.page'
import carrinhoPage from '../../e2e/frontend/pages/carrinhoPage.page'
import pagamentoPage from '../../e2e/frontend/pages/pagamentoPage.page'

Given('que me autentico no site', () => {
    homePage.login()
})

When('adiciono o produto {string} ao carrinho', produto => {
    homePage.pesquisaProduto(produto)
    cy.url().should('contain', produto.toLowerCase())

    produtoPage.adicionarProdutoCarrinho()
    carrinhoPage.fecharPedido()
})

When('seleciono a forma de pagamento boleto', () => {
    pagamentoPage.manterMesmoEndereco()
    pagamentoPage.selecionarFormaBoleto()
})

Then('gero o boleto enviando para o e-mail', () => {
    pagamentoPage.finalizarPedido()
    cy.contains('Obrigado, Seu pedido foi feito e será processado após o pagamento')
        .should('be.visible')
    cy.contains('A confirmação será enviada para o seu e-mail.')
        .should('be.visible')
})
