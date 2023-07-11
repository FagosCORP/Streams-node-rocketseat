import http from 'node:http'
import { json } from './middlewares/json.js';
import { routes } from './routes.js';

// Query Parameters; 
// mudanca em tempo de execucacao.
// Precisa ser uma url que possa ocorrer mudancas e nao atrapalhe em seu funcionamento.
// http://localhost:3333/users?page=2&nome=Ryan

// Route Parameters;
// Indentificacao de recurso;
// http://localhost:3333/users/1

// Request Body;
// passando no corpo da requisicao mais seguro geralmente post e etc



const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);
  // conseguiu achar a rota sim
  const route = routes.find(route => {
    // vendo se a rota que o usuario esta fazendo a requisicao passa no teste da rota 
    // no regex da rota que valida la os parametros e inicial
    return route.method == method && route.path.test(url);
  });

  if (route) {
    // retornar os dados que a regex encontrou validando 
    // oq tu encontrou usando esse regex aqui
    // me devolva tudo que a regEx encontrou batendo com esses valores de depois do inicio
    // users/(?<$1>[a-z0-9\-_]+)/
    const routerParams = req.url.match(route.path);
    console.log(routerParams);
    return route.handler(req, res);
  }

  return res.writeHead(404).end();

})

server.listen(3333);
