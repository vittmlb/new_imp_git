/**
 * Created by Vittorio on 13/04/2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var ProdutoSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    nome: {
        type: String,
        default: '',
        trim: true,
        required: 'O campo nome é obrigatório'
    },
    modelo: {
        type: String,
        default: '',
        trim: true
    },
    descricao: {
        type: String,
        default: '',
        trim: true
    },
    preco_usd: {
        type: Currency,
        default: ''
    }
});

mongoose.model('Produto', ProdutoSchema);