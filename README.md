# Página: Post

## Commit
* Criar um arquivo dentro da pasta ./posts chamado [slug].tsx (Quando uma página é dinâmica eu posso
 nomear o arquivo e colocar [ ] por volta, assim todos posts vão para esse params)
* Na páginas de posts trocar as ancoras por Link e puxar os href pro Link.  &lt;Link href={`/posts/${post.slug}`}&gt;
* Agora ao clicar no post já fica disponvel o slug na rota. E consigo utilizar esse slug para fazer 
o carregamento do post.

## Detalhes importantes
* No [slug].tsx pra carregar o conteúdo do post, eu posso utilizar o getStaticSiteProps (SSG) ou o 
getServerSideProps (SSR).
* Pra acessar o conteúdo total do post o usuário deve ester logado e ter uma assinatura ativa, se eu 
gerar essa página de forma estática ela não vai estar protegida, porque toda página estática vai estar
disponível pra todos usuários.

## Commit
* Então utilizei getServerSideProps({ req }) passando a requisição pra indentificar o usuário.
* variável session = getSession({ req }) pra ter acesso ao token do usuário.
* Para conseguir carregar o conteúdo do post precisa saber qual post carregar, essa informação a 
gente consegue através do slug.
* Tem um parâmetro chamado params, e pego o slug de dentro dele { slug } = params
* Busco o cliente do prismic passando o req como parâmetro
* Crio uma variável response e busco lá do prismic o getByUID('post', slug) passando o tipo do documento
 que quero buscar, e o slug em si. Como a tipagem dele pode ser um Array ou não, eu tipo ele como String 
 porque não utilizei o ...(spread operator) só terei um único slug, e tipo ele como String, e como terceiro 
 parâmetro eu posso passar uma série de informações, mas passei um objeto vazio {}.
* Crio uma variável posts para fazer a formatação dos dados, parecido com a formatação que fiz no index.
* Depois de formatado crio uma interface pra tipar os dados e passo as props pra função Post montar o html em tela.
* Estilização do post.module.scss


