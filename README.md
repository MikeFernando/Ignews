# Página: Preview do post

## Resumo
* Gerar o preview do post pra quando a pessoa que não estiver assinando o conteído da aplicação poder
ver uma pequena parte do conteúdo.
* O conteúdo do preview vai ser utilizado principalmente pelos mecanismo de busca, pra que eles 
consigam indexar os posts da aplicação, mesmo que sejam posts que só podem ser acessados por quem assina a 
aplicação.
* Então quem acessar o app e não estiver assinando ou não tiver logado, vai ver apenas um trecho
do começinho do post (preview) e vai ter a opção de assinar.

## Commit
* Crio a pasta ./preview dentro da pasta posts
* Como a estrutura é muito parecida e vou utilizar quase tudo, copio o slug e colo na pasta preview
* Oque muda é que o PostPreview não ira utilzar (SSR) ele vai ser um post estático. Porque o preview 
não vai verificar se o usuário tem uma assinatura ativa ou não, sendo assim toda página que é publica 
pode ser estática.
* Para carregar a página de preview crio uma função getStaticPath.
* Removendo parte do conteúdo do post, dando um splice(0, 3) no RickText do content.
* Na div onde mostra o conteúdo coloco 2 className. (pra isso basta usar `${postContetn}, ${previewContent}`).
* Criar div com link de continuar lendo.
* Se a pessoa esta logada ela não precisa ver o preview do post e sim que ela veja o post original com 
todo o conteudo completo.
* E isso não deve ser feito no getStaticSiteProps porque nele não temos os dados do usuário no session, 
porque não recebemos a req.
* Então uso o useEffect do react na função PostPreview verificando se tem uma session.activeSubscription
e redirecionado o usuário pra home se não for um assinante. <br>
![Imgur](https://imgur.com/LZkMDJH.png)
