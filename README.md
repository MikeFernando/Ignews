# Ouvindo eventos do Stripe

# Resumo
* Pegar os eventos que vem em formato 'stream' e interpretar os eventos para utilizar as informações
que ele traz
* Não é tão simples porque o stripe quando ele envia os webhooks ele utiliza um formato steaming,
então é como se ele fizesse a requisição pra nossa api enviando os dados aos poucos e não tudo de uma vez só.
* Então é necessário transaformar essa requisição em um código legível em javascript pra gente conseguir utilizar as informações
que ele mandar
* Não é um código que precisa decorar e nem entender muito (é muito específco do Node em streaming)

# Commit
* Importar do Node { Readble } de 'stream' (Readble significa algo que vamos ler aos poucos)
* No momento que recebermos essa requisição vamo utilizar esse Readble para ler, para isso criei uma nova função chamada buffer()
que ela converte essa Readble stream em um objeto.<br>
![Imgur](https://imgur.com/PXlhLGw.png)
* Essa função buffer recebe uma readble (que é a stream)
* Ela cria um array chamado chunks (que são os pedaços da stream)
* Ela vai percorrendo pra cada vez que Readble recebe um valor da requisição ele armazena dentro de chunk
* Essa sintaxe de for await é uma sintaxe bem nova, ela aguarda novos chunk e vai dando um push(empurrar) ele pra dentro do array de chunks
* No final ele concatena todos os chunk e converte em um Buffer
#
* Na api de next crio uma variável buf passando await buffer(passando a req)
* Agora dentro desse buf temos todos os dados da req
* Uma coisa muito importante é exportar uma config: 👇<br>
![Imgur](https://imgur.com/HrwYOeA.png)
* Porque o Next.js por padrão entende que toda requisição vai vim em formato json, ou como envio de um formulário ou qualquer coisa assim. Mas nesse caso a requisição está vindo como Readble(stream), por isso eu preciso desabilitar o entendimento padrão do Next.js sobre oque ta vindo na requisição.
#
* Verifico se o método da requisição é POST, porque se não for post nem vou permitir essa rota ser chamada.
* Quando a gente cria uma funcionalidade webhook na aplicação, ela é uma rota em nossa api comun como qualquer outra na aplicação e pode
ser acessada externamente.
* Então é muito comum quando uma aplicação externa queira se comunicar com nossa aplicação através de webhooks, essa aplicação terceira manda um código
pro nosso app pra falar <strong>📢Olha se você receber esse código sou eu mesmo que estou querendo se comunicar se NÃO receber é outro alguem mal intencionado CUIDADO</strong>.
* No termial onde o stripe está ouvindo os webhooks, copio o secret key e salvo no .env.local
* Crio uma variável secret = passando req.headers['stripe-signature'] <- procurando por esse cabeçalho
* Crio um let event: passando Stripe.Event (que são os eventos que vem do webhook)
* Try passando event = stripe (importo ele de services) .webhook.constructEvent( passando o buf, o secret (que é stripe-signature) e por terceiro parâmetro a STRIPE_WEBHOOK_SECRET)<br>
  Se der errado cath(pegar o erro) e retorno um res.status 400 e a mensagem de erro.
* Agora que ele construiu esse evento a gente consegue ter acesso a várias informações dele<br>
![Imgur](https://imgur.com/EMads4e.png)
* O mais importante agora é o event.type (porque ele retorna por exemplo se o checkout foi completado com sucesso ou deu falha)
* Então vou dizer quais eventos são relevantes (quais eventos eu quero que ele ouça pra mim)
* Pra isso por fora da função crio uma variável relevantEvents passando Set(['checkout.session.completed']) (que é o type se deu certo ou não)
* Desestruturo { type } de event
* E verifico se relevantEvent.has(type) tem um type<br>
![Imgur](https://imgur.com/O1IFQft.png)
