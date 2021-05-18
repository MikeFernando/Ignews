# Consumindo API do Prismic

## Formatação de dados
Quando buscamos dados de uma api ou serviços de terceiros é muito comum as vezes esses dados NÃO virem 
no formato que a gente precisa, e também é comum a gente deixa pra formata esse formato na interface.<br>
Se eu passar os dados que estão sendo carregados no serverSide para formatar eles na interface, oque vai
acontecer é que esses dados serão formatados no front-end e toda vez que alguem acessar essa página.<br> 
Agora se eu formatar esses dados antes de passar isso para o html o front-end em si, esses dados serão
formatados uma única vez
## Dica
Sempre faça na grande maioria das vezes a formatação dos dados (datas, textos, preços) logo após você
consumir esses dados da api.

## Commit
* Criei uma variável posts pegando todos results e percorrendo cada um deles com map, e retornar um
novo objeto com os dados já formatados.
* Instalar prismic-dom (essa lib converte os formatos do prismic para  ou pra textos, ficando mais fácil acessar 
os dados)<br>
![Imgur](https://imgur.com/v1XxN3h.png)
* Passar posts no retorno das props { posts }
* Tipar em uma interface os posts
* Percorrer os posts com map retornando pro html os dados formatados <br>
![Imgur](https://imgur.com/zPFGNyh.png)


