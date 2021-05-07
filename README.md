# Componentes e páginas

![](https://imgur.com/w8cFize.png)

## Detalhes 
* Toda chamada a api dentro de um componente usando o hook useEffect do React ela acontece no browser
* Essa chamada só vai acontecer quando a página estiver pré montada, depois ela faz a chamada

 1º A interface vai ser renderizada em um primeiro momento sem o preço, depois que a chamada terminar o preço vai ser preenchido, isso se chama 'layout shift' que significa
   uma mudança no visual que fica perceptível pro usúaro, e isso não é bom em termos de UX. <br><br>
 2º O google não iria indexar o conteúdo da api, porque ele não espera essa chamada HTTP acontecer.

## Resumo
* Realizar a primeira chamada à api do stripe e obter as informações do produto
* Aplicar (SSR) à chamadas HTTP não no browser, mas sim no server side rendering pra quando o next devolver a interface pronta pro browser ele ja tenha todos os dados da api.

## Commit
* Na página home exportar uma função assíncrona getServerSideProps
* Tipagem da funcão com GetServerSideProps do next
* Intalar o stripe
* Criação da pasta 'services' com arquivo stripe.ts que vai definir a conexão com stripe (É uma SDK biblioteca pra lidar com stripe sem precisar fazer as requisiçoes usando HTTP).
* No primeiro parâmetro preciso por a chave do stripe salva no arquivo .env.local
* No segundo parâmetro um objeto com algumas informações obrigatórias.
* Na função getServerSideProps busquei o preço  passando o 'id' do preço (esse id eu busco lá do site do stripe em produtos -> API ID)
* Criei um objeto products e passei priceId e amount (no amount é sempre bom salvar ele em centavos dividindo ele por 100, assim ele sempre fica um numero inteiro mais facil de manipular)
* E retornar nas props o obejto product
* Na Home eu recebo o product por parâmetro
* Criei uma interface tipando o product pra não ficar com 'any'
* No retorno do Home usei as informações do product e formatei com Intl.numberFomat()
