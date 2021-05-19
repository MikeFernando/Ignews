# Validando assinatura ativa

## Resumo
* Conseguir validar se a assinatura do usuário está ativa para ele poder consumir o conteúdo do post.
* Já sabemos como recuperar a sessão do usuário utilizando getSession, porém não temos acesso a assinatura
 do usuário.
* Então oque poderia ser feito é fazer uma query no faunaDB e não teria problema nenhum, porque dentro 
getServerSideProps a gente pode ter acesso a banco de dados, envios de email, api externas (essas coisas que precisam de segurança.)
* Mas podem existir mais lugares na aplicação que precisam ter acesso a assinatura, então se fazer as 
query no getServerSideProps os dados da assinatura ficarão disponíveis apenas nesse contexto.
* Só que lá no componente SubscribeButton que faz uma nova inscrição do usuário, seria interessante 
fazer uma verificação pra caso o usuário já estiver com uma assinatura ativa a gente não deixar ele 
assinar denovo.
* Então já temos 2 lugares no app que precisam da informação do usuário se ele tem assinatura ativa ou 
não.
* Vai ser muito melhor conseguir ter essa informação compartilhada entre todos componentes, mas infelizmente 
não vou criar um hook ContextApi.
* Como a gente tem acesso ao session (e o session já usa ContextApi em todos lugar da aplicação).
* Então vou colocar mais informações dentro desse session (no caso as informações da subscription).

## Commit
* Dentro do Next lá em auth no [...nextauth].ts tem um novo callback que se chama session.
* Esse callback permite modificar os dados que estão dentro do session e retornar o session com os dados 
modificados.
* Ali vou fazer uma query para buscar se o usuário tem uma inscrição ativa ou não.
* Para buscar a subscription de um usuário específico é através de indexes, por isso criei um index 
'subscription_by_user_ref'.
* Como não tenho acesso a ref do usuário dentro de session, eu busco pelo email.
* Então oque essa query basicamente faz é procurar uma subscription pela 'ref' do usuário,
como não tenho a referência direta, eu seleciono uma busca por email.
* Porém eu so quero buscar a subscription caso ela esteja ativa.
* Pra isso crio um novo index 'subscription_by_status'.
* Agora temos uma query que será uma busca condicional a 2 indexes: <br>
        - 1º se a subscription é de tal usuário. <br>
        - 2º se a subscription está ativa. <br>
* Nesses casos é preciso entender sobre Operações em Conjunto.

## Operações em Conjunto
* As operações com conjuntos são as operações feitas com os elementos que formam uma coleção:<br>
 ### União
  <img src="https://imgur.com/r0N5vDq.png" alt="drawing" width="200"/><br>
  Quando quero buscar elementos onde as condicionais estão em uma ou na outra bolinha tanto faz, eu tenho uma UNIÃO.
  <hr>

 ### Intersecção
 <img src="https://imgur.com/Yeu9Wls.png" alt="drawing" width="200"/><br>
  Quando quero buscar os elementos que estão nas duas condições tanto em uma quanto na outra, eu tenho INTERSECÇÃO
 <hr>

 ### Diferença
<img src="https://imgur.com/GONMDZ4.png" alt="drawing" width="200"/> <br>
  Quando quero buscar os elementos que estão somente em uma e não na outra, eu tenho uma DIFERENÇA.
<hr>

## Continuação do Commit
* Então aqui como quero buscar as informações que bate tanto com primeiro Match('subscription_by_user_ref'),
 tanto com o segundo Match('subscription_by_status').
* Utilizo a Intersecção. <br>
![Imgur](https://imgur.com/YMbnF5y.png)
* Jogar o session dentro de try pra sempe que não encontrar uma inscrição ativa retornar a inscrição como null.
* No [slug].tsx verifico se o usuário não tem uma sessão ativa, e redireciono ele pra home.
* No componente SubscribeButton também verifico se ele tem uma sessão ativa, para não mandar ele para o 
stripe e sim direto para a página de posts.     
