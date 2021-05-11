# Salvando usuário no banco

## Commit 
* No arquivo [...nextauth].tsx adicionei o callbacks
* Callbacks são funções executadas de forma automaticas pelo nextauth assim que acontece uma ação
* Sempre que o usuário faz login a função callback é executada
* Nesse callback temos acesso aos dados do usuário, e assim conseguimos inserir esses dados no BD.
### Implementando
* Importo fauna.ts de ./services
* Importo { query as q } de dentro do faunadb (renomeio pra ser mais prático)
* Faço a inserção no banco: 👇 <br>
![](https://imgur.com/jOgpwnO.png)
