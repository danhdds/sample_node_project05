const dbConfig = require('../config/dbConfig.js');

exports.createMatricula = (req, callback) => {

    dbConfig.connectBillindoDb(function (connection) {

        const matriculaObj = { 
            valor_total_curso: req.body.valorCurso, 
            quantidade_faturas: req.body.quantidadeFaturas, 
            dia_vencimento_faturas: req.body.diaVenceFatura, 
            nome_curso: req.body.nomeCurso, 
            id_instituicao: req.body.idInstituicao, 
            id_aluno: req.body.idAluno 
        };

        connection.connect();

        connection.query('SELECT * from `intituicao_ensino` WHERE id = (?)', [req.body.idInstituicao], function (err, instituicao) {

            if (err) {
                callback(err, null, null, null);
                connection.end();
                return;
            }

            if (instituicao[0] == undefined) {

                callback(null, true, null, null);
                connection.end();
                return;

            } else {

                connection.query('SELECT * from `aluno` WHERE id = (?)', [req.body.idAluno], function (err, aluno) {

                    if (err) {
                        callback(err, null, null, null);
                        connection.end();
                        return;
                    }

                    if (aluno[0] == undefined) {

                        callback(null, null, true, null);
                        connection.end();
                        return;

                    } else {

                        // (`valor_total_curso`, `quantidade_faturas`, `dia_vencimento_faturas`, `nome_curso`, `id_instituicao`, `id_aluno`)
                        connection.query('INSERT INTO `matricula` SET ?', matriculaObj , function (err, result) {

                            if (err) {
                                callback(err, null, null, null);
                                connection.end();
                                return;
                            }

                            if (result) {
                                callback(null, null, null, result.insertId);
                                connection.end();
                                return;
                            }

                        });

                    }

                });

            } // end if else

        });

    });

};

exports.getMatriculas = (callback) => {

    dbConfig.connectBillindoDb(function (connection) {

        connection.connect();

        connection.query('SELECT * from `matricula`', function (err, result) {

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
