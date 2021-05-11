const dbConfig = require('../config/dbConfig.js');

exports.createAluno = (req, callback) => {

    dbConfig.connectBillindoDb(function (connection) {

        const { nome, cpf, dataNascimento, telefone, genero, meioPagamento } = req.body;

        connection.connect();

        connection.query('SELECT nome from `aluno` WHERE nome = (?)', [nome], function (err, user) {

            if (err) {
                callback(err, null, null);
                connection.end();
                return;
            }

            if (user[0] !== undefined) {

                callback(null, user, null);
                connection.end();
                return;

            }else {
                 
                connection.query('INSERT INTO `aluno` (`nome`, `cpf`, `data_nascimento`, `telefone_celular`, `genero`, `meio_pagamento_faturas`) VALUES (?, ?, ?, ?, ?, ?)', [nome, cpf, dataNascimento, telefone, genero, meioPagamento], function (err, result) {

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

exports.getAlunos = (callback) => {

    dbConfig.connectBillindoDb(function (connection) {

        connection.connect();

        connection.query('SELECT * from `aluno`', function (err, result) {

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
