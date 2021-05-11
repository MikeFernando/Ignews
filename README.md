# Verificando usuário duplicado

## Commit 
* Não criar um usuário que já existe no banco de dados
* Como o fauna conta o numero de operações feitas no banco, reduzi para uma query só
* Dentro do fauna a gente consegue ter muito controle sobre as operações que queremos fazer (If, For etc...) 
### Implementando
* Dentro do objeto query
* Todo If dentro do fauna precisa ter um else
* Para fazer essas buscas é necessário utilizar os indexes para identificar os dados
* Se <br>
 Não <br>
 Existe<br>
 Match = pode ser comparado ao Where do SQL<br>
 Index do email = referência ao dado<br>
 CaseFold = normaliza os caracters em lowerscase<br>
Eu: <br>
Crio<br>
Coleção de usuários, passando o email<br>
* Então<br>
Busco<br>
Match<br>
Index<br>
Casefold<br>

![](https://imgur.com/Xe1oooR.png)
