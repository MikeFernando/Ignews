# Gerando sessão de checkout

![](https://imgur.com/teFKdXi.gif)

## Resumo
* Redirecionamento do usuário quando ele clica em subscribe now para página de pagamento do stripe
* Para isso precisa chamar aquela API routes subscribe feita no back-end do next
* Como a rota é do tipo POST, é necessário utilizar o fecth ou axios para fazer as chamadas(usei axios)

## Detalhes sobre Stripe
* Ele tem 2 SKD pra javascript
  - 1 pra lidar no back-end com a chave privada
  - 1 pra lidar no front-end com as informações publicas

## Commit 
* Instalação do axios
* Dentro de ./services crio o arquivo api.ts 
* No componente SubscribeButton faço a chamada POST para API '/subscribe'
* Pegando no response o { sessionId }
* Dentro de ./services crio um arquivo stripe-js.ts (que é a integração do browser com stripe no front-end)
* Instalação da biblioteca @stripe/stripe-js e importo { loadStripe }
* Exporto uma função getStripeJs que faz a conexão com stripe passando a chave publica salva no .env
* No SubscribeButton importo a função getStripeJs e atribuo a variável stripe
* Uso o método redirectiToCheckout passando por parâmetro o sessionId que vem do back-end