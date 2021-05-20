# Gerando previews estáticos

## Pontos importantes
* O Next tem alguns comportamentos nessa parte de geração de site estáticas
### Quais são esse comportamentos?
* 1º forma: Gerar as páginas estáticas durante a build (utilizado quando não tem muitas páginas estáticas para 
serem contruídas, tipo uma categoria com 30), assim quando os usuários acessarem as páginas já estarão carregadas.
* 2º forma: Gerar a página estática no primeiro acesso (utilizado quando um recurso tem muitas quantidade, tipo 
uma produto com 1000 items) melhor deixa pra carregar conforme as pessoas forem acessando.
* 3º forma: Metade de cada um (os 30 produtos mais acessados do site gero na build) e os restante deixo pra
carregar conforme forem acessando.

## getStaticPaths
* Esta totalmente ligada a essa terceira forma de gerar páginas estáticas.
* Paths é um Array passando quais são os caminhos ou seja quais funcionalidades eu quero gerar na build do next.
* Se deixar Paths vazio, ele será carregado conforme os usuários acessarem as páginas.
* Também poderia fazer uma chamada aos produtos mais quentes ou acessados do meu site, passando dentro 
de paths um obejto com o params e dentro slug do produto.
* getStaticPaths só existem em arquivos com rotas dinâmicas [...params].tsx
* Fallback pode receber 3 valores: <br>
      - true = ta dizendo que se alguem acessar um post que ainda não foi gerado de forma estática, eu 
      quero que você carregue o conteúdo desse post pelo lado do browser. (ele tem 2 problemas muito ruim, 1º ele 
      causa um layout-shift carrega a página sem os dados e depois que a chamada termina é mostrado, 2º ele 
      não ajuda os mecanismos de busca pegar os dados para indexar)<br>
      - false = se o post não foi gerado de forma estática ainda, ele vai retornar um 404 (not Found) e só.<br>
      - 'blocking' = ele é parecido com o true porem vai carregar os dados no lado do servidor e não do client.

## Commit
* Definir um revalidate no retorno de getStaticProps

![Imgur](https://imgur.com/QQeZ8Uv.png)
