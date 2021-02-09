const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Status code 200 for pedido'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'pedido adicionado'
    });
});

router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido
    res.status(200).send({
        mensagem: 'Usando GET com ID',
        id: id
    });
});

router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Pedido Apagado'
    });
});

module.exports = router;