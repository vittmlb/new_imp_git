/**
 * Created by Vittorio on 13/04/2016.
 */

var produtos = require('../controllers/produtos.server.controller');

module.exports = function(app) {
    
    app.route('/api/produtos')
        .get(produtos.list)
        .post(produtos.create);

    app.route('/api/produtos/:produtoId')
        .get(produtos.read)
        .put(produtos.update)
        .delete(produtos.delete);

    app.param('produtoId', produtos.findByID);
    
};