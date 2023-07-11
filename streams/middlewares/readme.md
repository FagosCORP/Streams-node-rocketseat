parte que transforma o corpo da requisicao e transforma a requisicao em um json

pode estar em outro arquivo

middleware interceptador nada mais e do que uma funcao que intercepta
a funcao de outro arquivo

1->
Streams -> mecanismos para ler e escrever em partes de forma assincrona

2->
pipe -> encaminha dados de uma stream para outra stream

3-> oq sao buffers
Estruturas de dados que representa informacoes binarias
4->criar um buffer a partir de uma string
buffer.from()

5-> chunks em streams
Pedacos de dados que sao lidos e escritos de forma assincrona

6->Middlewares
Funcoes que interceptam e manipulam algumas variaveis ou funcao seila de qualquer ambiente ou rota ou req e res seila

7-> pode existir middlewares globais
funcoes que modificam o comportamento do codigo incluem partes de codigo

3 formas de enviar para a api

request body ->
Envio de informacoes de um formulario
Nome, senha, email e etc

Nao pode informacoes sensiveis

Route params -> routes/users/1
faz parte do endereco para indentificacao de recurso
buscando o usuario com id respectivo quando nao tem nome nao tem nada
indentificar um recurso

Query Params -> envia no propio endereco do localhost url
Url statefull listagem de usuarios por filtro
para enviar informacoes nao sensiveis para modificar a resposta do back
end, filtro e paginacao nao sao obrigatorias
