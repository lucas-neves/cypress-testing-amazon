# utf-8
# language: pt

@regressao
@healthCheck
@homePage
Funcionalidade: Home page

    Background: Pré-condição

    @ct01
    Cenário: Cenário 1
        Dado que me autentico no site
        Quando adiciono o produto "Nike" ao carrinho
        E seleciono a forma de pagamento boleto
        Então gero o boleto enviando para o e-mail
