# <span style="color:#29b2a4">Webhooks do Stripe</span>

# Oque são Webhooks?
* É um patern muito utilizado para integração entre sistemas na web.
* Quando a gente vai integrar com uma ferramente de terceiros como por exemplo o Stripe,
geralmente oque essas ferramentas fazem é utilizar desse conceito de <span style="color:#29b2a4">Webhooks</span> pra avisar à aplicação que aconteceu algum evento
# Como ela avisa?
* Na grande maioria das vezes por uma rota http exemplo: http://localhost:3000/api/stripe/webhooks
* Ai toda vez que acontecer um evento lá no stripe ele vai mandar pra essa rota, e vai mandar as informações do evento

# Como Configurar webhooks?
* O Stripe tem isso configurável dentro do painel em configurações -> Checkout session -> Configurar webhooks
* Se sua aplicação estiver online ou seja em produção, você preenche o endpoint <span style="color:red">(Não adianta cadastrar um endpoint com http://localhost:3000)</span> porque esse não é um endereço online, esse endereço só existe na sua máquina local.
* Como o ignews não está online ainda, vou utilizar a CLI do stripe <span style="color:red">(um software que é executado no terminal ouvindo os webhooks do stripe e encaminhando para o localhost)</span>

# Commit
* Baixar a CLI do stripe
* Dentro da pasta <span style="color:yellow">./api</span> criar o arquivo webhooks
* No corpo da função tem apenas um console.log( 'evento recebido' )
* Retorno um resposta em json ok true
