# Configurando FaunaDB

## Commit 
* Criar conta no faunaDB
* Salvar chave do banco de dados no .env.local
* Criação da pasta ./services e arquivo fauna.ts
* importo Client de faunadb e passo no objeto secret: process.env.FAUNADB_KEY
* Lembrando que as operações que são feitas utilizando chaves secretas, não podem ser feitas do lado do browser
