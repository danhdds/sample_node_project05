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

        connection.query('SELECT * from `intituicao_ensino` WHERE id = (?)', [req.body.idInstituicao], function (err, institution) {

            if (err) {
                callback(err, null, null, null);
                connection.end();
                return;
            }

            if (institution.length) {

                connection.query('SELECT * from `aluno` WHERE id = (?)', [req.body.idAluno], function (err, student) {

                    if (err) {
                        callback(err, null, null, null);
                        connection.end();
                        return;
                    }

                    if (student.length) {

                        // (`valor_total_curso`, `quantidade_faturas`, `dia_vencimento_faturas`, `nome_curso`, `id_instituicao`, `id_aluno`)
                        connection.query('INSERT INTO `matricula` SET ?', matriculaObj , function (err, result) {

                            if (err) {
                                callback(err, null, null, null);
                                connection.end();
                                return;
                            }

                            if (result) {
                                callback(null, true, true, result.insertId);
                                connection.end();
                                return;
                            }

                        });

                    } else {

                        callback(null, true, false, null);
                        connection.end();
                        return;

                    }

                });      

            } else {

                callback(null, false, null, null);
                connection.end();
                return;

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
