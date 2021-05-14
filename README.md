# Salvando dados do evento

# Commit 
* Dentro de um try catch, coloco um switch no type do evento para cada tipo de evento fazer uma ação 
diferente, porque na variável relevantEvents estou dizendo quais evento eu quero, se não for oque eu 
espero retorne um erro. OSERVAÇÃO: "Eu não coloquei status de erro na resposta porque estou retornando
pro stripe, e ai ele vai pensa que a requisição deu errado e vai fica re-tentando a requisição.
* Crio uma pasta _lib (_lib porque toda pasta ou arquivo dentro de 'pages' ou 'api' ele vai se tornar
rotas automaticamente dentro do Next.js). E dentro crio um arquivo manageSubscription.
* manageSubscription é uma função que recebe subscritionId: string, e customerId: string
* Oque manageSubscription vai fazer é salvar essas informações no banco de dados.
## Objetivo principal
* Buscar o usuário no banco do faunaDB com o ID { customerId } <- esse customerId não é a ref, ele 
é o stripe_customer_id.
* Então para buscar stripe_customer_id eu preciso criar um index (assim é possivel buscar o usuário pelo
id dele salvo dentro do stripe)
* Depois de buscar o usuário dentro do stripe, tenho que salvar os dados da subscription no banco faunaDB
* Criar uma nova Coleção chamada subscriptions que vai salvar as sub-inscrições dos usuários
* Utilizar o método assíncrono await manageSubscription passando o id da subscription(que está 
dentro de event) OBSERVAÇÃO: Todos os eventos do stripe terão essa tipagem 'Event', mas como no checkout
 session é um evento específico que eu quero, vou fazer o seguinte pra saber tudo oque ele pode retornar:
 ![Imgur](https://imgur.com/KZVUWCa.png)
## Em manageSubscription vou buscar os dados do usuário
* Buscar apenas a ref do usuário (porque a forma que o faunaDB faz relacionamento entre as coleções 
é via ref)
* E como o fauna cobra cada operação no banco, e eu quero evitar cobranças de dados que não estou utilizando,
e dizer quais campos eu quero com q.Select('ref').
* O webhook envia apenas o id da subscription, e para obter todos os dados da subscription é preciso
stripe.subscriptions.retrive passando o subscriptionId
* Agora criar uma coleção subscriptions passando data: subscription.
* Para não salvar a subscription inteira no banco, eu salvo apenas os dados que vou utilizar na variável
subscriptionData
