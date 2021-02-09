const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Status code 200 for Product Routes'
    });
});

router.post('/', (req, res, next) => {
    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    };
    res.status(201).send({
        mensagem: 'produto adicionado',
        produtoCriado: produto
    });
});

router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto
    res.status(200).send({
        mensagem: 'Usando GET com ID',
        id: id
    })
})

module.exports = router;