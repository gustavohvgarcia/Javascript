// incluir o modulo http atraves do metodo require
//   O módulo http do Node.js fornece funções úteis e classes para construir um servidor HTTP. 
//Ele é um módulo-chave para os recursos de rede do Node.
// inicialização do objeto HTTP;
const http = require('node:http');

const hostname = '127.0.0.1';
// definição da porta que o servidor irá esperar requisições;
const port = 3000;

// Retorna uma nova instância da classe http.Server
// criação do servidor e definição do callback que irá tratar cada requisição (objeto http.IncomingMessage);
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

//   E por fim, iniciamos a execução do servidor na porta especificada,
//definindo o callback que vai executar quando o servidor começar a funcionar;
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});