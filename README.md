# Parametrização nas rotas

![](https://imgur.com/SCWRj58.gif)

## Commit 
* Dentro de ./pages crio pasta ./api
* Dentro da ./api crio a pasta ./auth
* Dentro de ./auth crio arquivo [...nextatuh].ts
* instalo next-auth e suas tipagens @types/next-auth
* Seguindo a documentação do next-auth preenchi as informações dos provedores.
* GITHUB_CLIENT_ID e GITHUB_SECRET_KEY estão salvas no .env.local
* 'read:user' é uma permição que concede acesso para ler informações de um perfil do usuário. 
 ![](https://imgur.com/v0XyNBm.png)

* No SigninButton que é o componente que faz o login e logout da aplicação
* importei de dentro de next-auth/client a função signin e signout para chamar ela no onclick do botão.
* Dentro de next-auth/client tambem importo um hook chamado useSession, ele retorna informações se o usuário está logado ou não.
* Como ele retorna várias coisa eu desestruturo ele com [session] pegando somente o session
* Uso esse session no if do retorno
* Para que o next-auth funcione, precisamo entender que next-auth utiliza de contexto pra servir informações se o usuário está logado ou não
* Então no arquivo _app.tsx que tem acesso a todos os componentes eu import de dentro de next-auth/client o nosso Provider (Sempre bom renomear o Provider com um nome específico, nesse caso 'NextAuthProvider' é um bom nome)
* E joguei ele por volta dos outros componentes e passando pro NextAuthProvider uma propriedade chamada sesseion que recebe pageProps.session
