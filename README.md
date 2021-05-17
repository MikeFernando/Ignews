# Consumindo API do Prismic

## Commit
* Intalação do @prismicio/client que é o client do prismic para intergrar com javascript
* Importar Prismic de @prismicio/client e exportar uma função getPrismicClient
* Dentro getPrismicClient passa para o Primsmic.client o process.env.PRISMIC_ENDPOINT, e no segundo 
parâmetro passa um objeto com várias informações passando: <br>
      - accessToken: proccess.env.PRISMIC_ACCESS_TOKEN
      - req OBSERVAÇÃO: O Prismic recomenda que quando a gente está fazendo uma chamada pra api serverSide
      que passemos o 'req' como parâmetro pra ele

* Dentro de ./posts carregar os a listagem de posts via (SSG) porque quero ela estática
* prismic = importar getPrismicClient lá do services
* await prismic.query para buscar todos documentos, e como podemos ter vários utilizo array.
* Para buscar por campos específicos ele usa Predicates
* Como segundo parâmetro passo um obejto com fetch, qeu são quais dados eu quero buscar dessa publicação
(título, e contúdo), e pageSize: 100 (que é quanto posts eu quero trazer). 
* Retornar de getStaticProps algumas props.<br>
![Imgur](https://imgur.com/tyrv8rH.png)

# Página: Posts

![](https://imgur.com/xBDsuIz.png)

## Resumo
* Criei uma conta no Prismic.io para utilizar CMS.
* Configurei o CMS prismic com alguns posts

## Commit
* Criei uma pasta ./posts com arquivo index e style
* Criei a estrutura stática html da página posts e estilizei com css modules do next.js

