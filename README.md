# Contruindo estrutura Next.js
* Excluindo pasta style
* Apagando retorno html da vercel do arquivo index e mundo pra hello world
* Excluindo conteúdo da pasta public
* Apagar README.md
* Criar pasta 'src' e migrar pages pra ela 


## Pages
* Pasta 'pages' deve ficar na raiz do projeto ou no máximo dentro da pasta 'src'
* Arquivo index é o arquivo principal da aplicação
* Todo arquivo dentro da pasta 'pages' vai virar uma rota dentro do next.js, menos os arquivos _app e _document
* Todo arquivo dentro da pasta 'pages' é obrigatório exportar por default

## Adicionando typescript
* yarn add typescript @types/react(nessa versão o react não traz as tipagem typescript por padrão) @types/node -D
* Mudar extensão para tsx

## Adicionando SASS
* yarn add sass
* mudar extensão para scss

## Explicação da aula
* O arquivo _app fica por volta de toda a aplicação
* Nele fica coisas que vão se repetir em várias páginas
* Todo counteúdo dentro desse arquivo é recriado do zero toda vez que ele é renderizado
* _document é bem parecido com o _app, porém ele é criado somente uma vez
* _document pode ser comparado com o arquivo index.html (porém ele não é html)

## Resumo Commit
* Head do next pode ser usado em qualquer lugar da aplicação
* Ele serve ter titles dinâmicos por página

