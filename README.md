# Parametrização nas rotas

![](https://imgur.com/w8cFize.png)

## Rota dinâmica
* Quando queremos obter o parametro informado na rota é muito simples
* Crio uma pasta por exemplo ./users
* Nomeio o arquivo pra index (index é indentificado automaticamente como arquivo default)

## Commit 
* Dentro de ./pages crio uma pasta ./api
* Toda arquivo dentro da pasta ./api automaticamente se tornarm rotas da minha api
* Dentro da ./api crio um arquivo users
* Users é uma função anônima com request e response (que precisa ser tipado com NextApiRequest, NextApiResponse)
* Agora para buscar o id por parametro
* Crio um arquivo com [id].tsx por volta
* Para ter acesso ao id, basta destruturar { id } de dentro de request.query
* id é o nome do parametro
* Para retornar tudo depois de users nada rota, exemplo users/edit/banana
* Basta nomear o arquivo [...params].tsx
* Tudo vai ser repassado pra essa variável params (por causa do spread operator ...)

