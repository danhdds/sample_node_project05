const dbConfig = require('../config/dbConfig.js');

exports.createFatura = (valorFatura, datasVecimento, matriculaId, callback) => {

    valorFatura = parseFloat(valorFatura);

    dbConfig.connectBillindoDb(function (connection) {

        connection.connect();

        for (let i = 0; i < datasVecimento.length; i++) {

            connection.query('INSERT INTO `fatura` (`valor_fatura`, `data_vencimento`, `id_matricula`) VALUES (?, ?, ?)', [valorFatura, datasVecimento[i], matriculaId], function (err, result) {

                if (err) {
                    callback(err, null);
                    connection.end();
                    return;
                }

                if (result && datasVecimento[i] == datasVecimento[datasVecimento.length-1]) {
                    callback(null, result);
                    connection.end();
                    return;
                }

            });

        } // end for

    });

};

exports.getFaturas = (callback) => {

    dbConfig.connectBillindoDb(function (connection) {

        connection.connect();

        connection.query('SELECT * from `fatura`', function (err, result) {

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
