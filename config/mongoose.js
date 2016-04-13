/**
 * Created by Vittorio on 13/04/2016.
 */

var config = require('./config');
var mongoose = require('mongoose');

module.exports = function() {
    var db = mongoose.connect(config.db);
    require('../app/models/produtos.server.model');

    mongoose.connection.on('connected', function () {
        console.log(`Mongoose connected at ${config.db}`);
    });
    
    return db;
};