# API routes no Next.js

![](https://imgur.com/w8cFize.png)

## Resumo
* Geralmente quando vamos fazer operações que requer um certo nível de segurança usamos o back-end (envio de email, comunicação com BD, autenticação etc...)
e isso são coisas que não podem ficar no front-end da aplicação
* Porque nunca as informações no front-end estão 100% seguras, nem utilizando a melhor criptocrafia. Se essa informação está no front-end então ela é publica
* Nessa aplicação não vai ser criado um back-end, porque só o Next.js vai ser o suficiente.

## Detalhes importantes
* Next.js não substitui um back-end, mas em alguns momenttos pra poucas funcionalidades, ou a aplicação tem um escopo muito fechado o next funciona muito bem.
* Tudo que é executado na api routes não é acessível pelo browser
* Então quando você traz operações de acesso aos dados para api routes do next, você está trazendo segurança pra aplicação

## Commit 
* Dentro de ./pages crio uma pasta ./api
* Toda arquivo dentro da pasta ./api automaticamente se tornarm rotas da minha api
* Dentro da ./api crio um arquivo users
* Users é uma função anônima com request e response (que precisa ser tipado com NextApiRequest, NextApiResponse)
