export function buildRoutePath(path) {

    // recebe o caminho da rota 
    // eu vou criar uma regex 
    // indentificar os routes params
    // encontrar dentro de um texto todas variaveis
    // que possuam essa especificidade

    const routeParamRegex = /:([a-zA-Z]+)/g;
    // o retorno dessa subselecao e primeira selecao 
    // o conjunto 1 DA PRIMEIRA REGEX
    // acha os parametros da rota
    // tudo que voce encontrar que bata com essa regex aqui voce troca por aquela regex
    // users/:id == users/(?<$1>[a-z0-9\-_]+)/(?<$1>[a-z0-9\-_]+)/(?<$1>[a-z0-9\-_]+)

    // nomear o parametro a partir do grupo que toda vez que o regex ocorre o trocagem
    // ele vai pegar o index 1 do retorno que ele encontrou e colocar como indice
    // se botar esse ?<$1>
    const pathWithParams = path.replaceAll(routeParamRegex, '(?<$1>[a-z0-9\-_]+)');
    // se nao encontrar nenhuma nao da erro e so uma regex
    // trocar os parametros pelo valor que vem na rota 
    // matchAll() a conferencia de todos que a regex encontrou na string
    // replaceAll() de todos que a regex encontrou substitui por isso
    // ele retorna oq ele encontrou tambem retorna o index na string e o groups
    // parametro quando colocado na regex eu defino um grupo
    // identificar o nome id

    const pathRegex = new RegExp(`^${pathWithParams}`);
    // retonar o regex para ser utilizado como teste 
    // users/(?<$1>[a-z0-9\-_]+)/(?<$1>[a-z0-9\-_]+)/(?<$1>[a-z0-9\-_]+)
    return pathRegex;
}