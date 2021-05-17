# Ouvindo mais eventos

![](https://imgur.com/xBDsuIz.png)

## Resumo
* Agora que já conseguimos ouvir quando um usuário faz uma compra pelo stripe, a gente precisa
ouvir algums outros eventos que o stripe nos envia a cerca da parte de subscription
* Exemplo se o usuário acessar la pelo stripe a conta dele e cancelar a inscrição, o stripe vai
nos avisa através de um webhook que essa inscrição foi cancelada, ou se o cartão do usuário não tem
crédito.
* Tem 3 eventos que são imprescindíveis a gente ouvir a respeito subscription de um usuário que são: <br>
      - 'customer.subscription.created' <br>
      - 'customer.subscription.updated' <br>
      - 'customer.subscription.deleted' <br>

## Commit
* No switch vamo ouvir esses 3 eventos dentro da mesma lógica
* Pegar a subscription dentro de <strong>event.data.object</strong> as <strong>Stripe.Subscription</strong>
* Executar o método await saveSubscription passando subscription.id, subscription.customer.toString
* A função saveSubscription a única coisa que ela está fazendo é buscar o usuário e salvar a subscription no banco. Mas agora tem 2 casos de quando a subscrition é atualizada ou deletada, eu não quero que ele crie um novo, mas atualize o já existente. Só vou criar uma nova subscription no bacno de dados quando eu estiver com evento <strong>'customer.subscription.created'</strong> ou no <strong>'chechout.session.completed'</strong>
* Então no saveSubscription adiciono um novo parametro pra ela chamado createAction = false por padrão.
* Verifico antes de criar se estou com uma createAction
* Se eu estou com createAction eu faço a query criando uma subscription
* Senão eu faço um Replace para atualizar a subscription existente
## Existem dois métodos para atualizar um registro dentro do fauna
* Replace = substituo toda informação no registro daquela ref
* Update = consigo atualizar uma informação naquele registro
# 
* Crio um novo index subscription_by_id pra conseguir buscar pelo id dela
* O replace precisa saber qual subscription ele precisa atualizar, e o parametro que ele recebe é ref
* Pra buscar apenas a ref e evitar ser cobrado pelo fauna em buscar dados que não vamos usar, eu uso q.Select para selecionar somente a ref
* como segundo parametro do replace eu passo quais dados eu quero atualizar
* Entao esse o if verifica se tenho um createAction eu crio e salvo no banco, senao eu do um replace e troco todos os dados
* Agora eu devo receber um webhook avisando se o usuário cancelou a subscription e no fauna mudar o status pra de active pra canceled
