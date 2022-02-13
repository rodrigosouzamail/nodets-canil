//Importações para o projeto
import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express'
import path from 'path'
import mainRoutes from './routes/index'


//Configurações
dotenv.config();
//Iniciando o servidor
const server = express();
//Configuração do template engine escolhido para o projeto = mustache
server.set('view engine', 'mustache')
//Configuração de pastas de visualização do projeto views usando o path
server.set('views', path.join(__dirname, 'views'));
//Rodando a engine template mustache
server.set('mustache', mustache());

//Configuração da pasta public utilizando o express static.
server.use(express.static(path.join(__dirname, '../public')));

//COnfiguração de rotas

server.use(mainRoutes);

server.use((req, res)=>{
    res.send('página não encontrada!')
})


//rodando o servidor utilizando o arquivo .env variáveis de ambiente.
server.listen(process.env.PORT)
