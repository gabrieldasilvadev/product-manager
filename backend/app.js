const express = require('express');
const cors = require('cors');
const Produto = require('./src/model/Produto');
const PORT = 3400;

const app = express();
app.use(cors());
app.use(express.json());

const servicoProduto = require('./src/service/servicoProduto');

app.get('/', (req, res) => {
    res.send("API Funcionando!");
});

app.get('/produtos', (req, res) => {
    var  listaDeProdutos = servicoProduto.obterTodos();
    res.json(listaDeProdutos);
});

app.get('/produtos/:id', (req, res) => {

    var id = req.params.id;

    var produto = servicoProduto.obterPorId(id);
    res.json(produto);
});

app.post('/produtos', (req, res) => {
 
    var produto = servicoProduto.cadastrar(req.body)
    res.json(produto);
});

app.put('/produtos/:id', (req, res) => {
    // Cadastra Produto
    var id = req.params.id;
    var produto = req.body;

    produto.id = parseInt(id);
    
    servicoProduto.atualizar(produto);

    res.json(produto);
});

app.delete('/produtos/:id', (req, res) => {
    // Cadastra Produto
    var id = req.params.id;
    servicoProduto.deletar(id);
    res.json({mensagem:`Produto com id ${id} foi deletado com sucesso!`});
});

app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));