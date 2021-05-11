# Gerando sessão de checkout

## Resumo
* Uma sessão de checkout é basicamente uma url que vai redirecionar o usuário para preencher as informções
de pagamento, e quando ele terminar de preencher as informações ele vai ser redirecionado de volta para
a aplicação.
* E nessa aplicação isso é feito quando ele clica no botão Subscribe now

## Detalhes
* Como a chave secreta do stripe não pode ser mostrada no front-end (senão poderão fazer qualquer coisa na aplicação)
* Por padrão o next já evita expor variáveis ambientes de serem mostradas de forma publica, mas se quiser expor elas basta iniciar com NEXT_PUBLIC_ antes do nome da variável.
* O recomendado é utilizar o conceito de API routes do next.js, porque esse processo acontecerá no servidor do next e não no browser, sendo assim nenhum usuário terá acesso a chave.


## Commit 
* No componente SubscribeButton eu começo criando uma função handleSubscribe e chamando ela no onClick do botão Subscribe now
* Com useSession verifico se o usuário tem uma sessão ativa, ou seja, se está logado na aplicação, se não estiver redireciono ele para o signin. Porque não faz sentido se increver sem estar logado
* Nas API routes ./api/auth crio um arquivo subscribe.ts
* Dentro desse arquivo exporto por padrão uma função anônima assíncrona, com req e res tipadas com NextApiRequest, NextApiResponse
* Verifico se o método da requisição é POST, senão retorno uma resposta com status 405 dizendo que só aceita método POST
* Então importo stripe e crio uma variável stripteChechoutSession que faz a criação do checkout session passando um objeto com as informações:
* Informações: 👇<br>
   - customer = é a informação mais importante porque é quem está comprando o produto, então pra isso eu preciso criar um customer dentro do painel do stripe. (stripeCustomer.id)
   - payment_method_types = como é assinatura é normal utilizar cartão ['card']<br>
   - billing_address_collection = se o endereço é obrigatório ou não 'required'
   - line_items = é um array que contém o objeto do produto passando price:'id do produto', e quantidade do produto
   - mode = é o tipo de pagamento no caso escolhi recorrente 'subscription'
   - allow_promotion_codes = caso queira cupom de descontos etc... true
   - success_url = quando der sucesso pra onde o usuário deve ser redirecionado (coloquei no .env.local)
   - cancel_url = pra onde ele tem que ser redirecionado quando cancela a requisição ( coloquei no .env.local)

## Acessando informações do usuário através dos cookes
* Next-auth salva o token do usuário logado nos cookes
* Os cookes podem ser acessado tanto na camada do front-end tanto no back-end que esteja no mesmo domínio
* No Next.js difícilmente você utilizará o localstorage pra salvar informações do token do usuário, porque o localstorage só fica acessível no front-end.
* Existe um método do next-auth/client chamado getSession
* Esse getSession funciona da seguinte forma:👇<br>
  ![Imgur](https://imgur.com/0q2nJ46.png)
* Agora com acesso aos dados do usuário logado, crio um customers com stripe passando como propriedade obrigatória no objeto o email.
  ![Imgur](https://imgur.com/3wISD88.png)
* No customer do checkout session eu passo o stripeCustomer.id
* Retornei uma resposta pra essa rota com status 200, com um json passando sessionId: stripeCheckoutSession.id
