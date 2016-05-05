/**
 * Created by Vittorio on 13/04/2016.
 */

var Produtos = require('mongoose').model('Produto');

exports.create = function(req, res) {
    var produto = new Produtos(req.body);
    produto.save(function (err) {
        if(err) {
            return res.status(400).send({
                message: err
            });
        } else {
            res.json(produto);
        }
    });
};

exports.list = function(req, res) {
    Produtos.find().sort('-created').exec(function (err, produtos) {
        if(err) {
            return res.status(400).send({
                message: err
            });
        } else {
            res.json(produtos);
        }
    });
};

exports.findByID = function(req, res, next, id) {
    Produtos.findById(id).exec(function(err, produto) {
        if(err) return next(err);
        if(!produto) return next(new Error(`Failed to load produto id: ${id}`));
        req.produto = produto;
        next();
    });
};

exports.read = function(req, res) {
    res.json(req.produto);
};

exports.update = function(req, res) {
    var produto = req.produto;
    produto.created = req.produto.created;
    produto.nome = req.produto.nome;
    produto.modelo = req.produto.modelo;
    produto.descricao = req.produto.descricao;
    produto.preco_usd = req.produto.preco_usd;

    produto.save(function (err) {
        if(err) {
            return res.status(400).send({
                message: err
            });
        } else {
            res.json(produto);
        }
    });
};

exports.delete = function(req, res) {
    var produto = req.produto;

    produto.remove(function (err) {
        if(err) {
            return res.status(400).send({
                message: err
            });
        } else {
            res.json(produto);
        }
    });

};