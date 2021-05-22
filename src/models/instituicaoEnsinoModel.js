const dbConfig = require('../config/dbConfig.js');

exports.createInstituicao = (req, callback) => {

    dbConfig.connectBillindoDb(function (connection) {

        const { nome, cnpj, tipo } = req.body;

        connection.connect();

        connection.query('SELECT * from `intituicao_ensino` WHERE nome = (?) OR cnpj = (?)', [nome, cnpj], function (err, institution) {

            if (err) {
                callback(err, null, null);
                connection.end();
                return;
            }

            if (institution.length) {

                callback(null, institution, null);
                connection.end();
                return;

            }else {
                 
                connection.query('INSERT INTO `intituicao_ensino` (`nome`, `cnpj`, `tipo`) VALUES (?, ?, ?)', [nome, cnpj, tipo], function (err, result) {

                    if (err) {
                        callback(err, null, null);
                        connection.end();
                        return;
                    }

                    if (result) {
                        callback(null, null, result);
                        connection.end();
                        return;
                    }

                });

            } // end if else

        });

    });

};

exports.getInstituicoesEnsino = (callback) => {

    dbConfig.connectBillindoDb(function (connection) {

        connection.connect();

        connection.query('SELECT * from `intituicao_ensino`', function (err, result) {

            if (err) {
                callback(err, null);
                connection.end();
                return;
            }

            if (result) {
                callback(null, result);
                connection.end();
                return;
            }

        });

    });

};