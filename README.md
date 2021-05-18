# Navegação no menu

## Link
* Sem o componente Link do Next por volta da &lt;a href=""&gt; o problema é que toda a página será carregada do zero,
 obtendo apenas o conceito de (SSR) e perdendo o conceito de SPA.
* Link permite navegar entre páginas carregando apenas o necessário.
* Link também tem uma propriedade chamada prefecth que basicamente faz um pré carregamento para que quando 
clicar no Link os dados já estejam em tela.
![Imgur](https://imgur.com/d8SDLeF.png)

## asPath
* Dentro de useRouter existe a informação asPath
* Ela mostra que rota está ativa
* Para alternar o CSS da página ativa 'Home' e 'Posts' usando asPath
* Poderia ser assim: 👇<br>
![Imgur](https://imgur.com/7vGsJ7r.png)<br>
* Ficando assim: 👇<br>
![Imgur](https://imgur.com/V95sxTA.gif)<br>
* Só que toda vez que tiver um Link na aplicação eu precisar fazer isso vai se torna muito trabalhoso.
* Então automatizei os Links criando um componente.

## Componente ActiveLink
* Retorna um Link de next/link
* Tipagem ActiveLinkProps contento: children, activeClassName<br>
      - <strong>children</strong>: ReactElement (porque eu quero receber UM e apenas UM elemento react, no caso a tag &lt;a&gt;).<br>
      - <strong>activeClassName</strong>: string; (qual que é a className que eu quero colocar quando o link estiver ativo)<br>
* Para que o componente ActiveLink tenha todas as propriedades que um Link tem, preciso extender LinkProps na tipagem ActiveLinkProps.
* Desestruturar { children, activeClassName, ...rest} salvando o restante das propriedades nessa variável ...rest
* Passando elas pra dentro do Link

## Aplicando asPath e aplicando o CSS da página ativa
* Importar asPath de useRouter
* Criar uma variável className = asPath === rest.href<br>
? classNameActive<br>
: ' '<br>
* Porém essa className não vai no Link, ela precisa ir na tag &lt;a&gt; e não temos a ancora dentro 
do componente, so temos o { children}
* Então utilizei cloneElement do React, porque consigo clonar um elemento modificando ou adicionando coisas nele.<br>
![Imgur](https://imgur.com/ZGitxfn.png)
* Tendo o mesmo resultado, porém de forma automatizada.<br>
![Imgur](https://imgur.com/V95sxTA.gif)<br>
