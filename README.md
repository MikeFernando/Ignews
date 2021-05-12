# Evitando duplicação no Stripe

![](https://imgur.com/teFKdXi.gif)

## Resumo
* Para evitar que o usuário seja duplicado no stripe é utilizar o banco de dados (faunaDB)
* Quando criar o usuário pela primeira vez, eu vou salvar o id do stripe dele junto com as outras
informações lá no banco faunaDB
* Ai quando eu for cai denovo em subscribe eu apenas verifico se tem um usuário com aquele id, se não tiver 
eu crio um novo

## Commit
* Salvar o usuário no fauna quando criar ele
* Importar {query as q} no subscribe e realizar uma query para atualizar (Porém não é possivel atualizar um usuário pelo index diretamente)
* Então divido em duas querys: <br>
  1º Eu busco o usuário 👇<br>
  ![Imgur](https://imgur.com/gE6KGb4.png)<br>
  2º Atualizo 👇<br>
  ![Imgur](https://imgur.com/wwGkltI.png)
* Porém ainda não estamos verificando se no faunaDB o usuário tem essa informação stripe_customer_id para não criar esse usuário denovo
* Crio uma variável customerId passando a informação do stripe_customer_id<br>
  ![Imgur](https://imgur.com/M0unJds.png)
* Verifico se NÃO existe essa informação pra depois criar o customer e fazer a query
* No retorno do if reatribuo a variável customerId pra stripeCustomer.id (Pra ela sempre ter um id)
* Por fim no stripeCheckoutSession na propriedade customer: uso 'customerId'
