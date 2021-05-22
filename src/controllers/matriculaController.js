const matriculaModel = require('../models/matriculaModel.js');
const faturaModel = require('../models/faturaModel.js');
const validarMatricula = require('../helpers/validarMatricula.js');
const calcFaturas = require('../helpers/calcFaturas.js');

exports.getMatriculas = (req, res) => {

    matriculaModel.getMatriculas(function (err, result) {

        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (result) {
            res.status(200).send({ matriculas: result});
            return;
        }

    });

}

exports.addMatricula = (req, res) => {

    validarMatricula.validateMatriculaData(req, function (isValid) {

        if (isValid) {

            matriculaModel.createMatricula(req, function (err, institution, student, matriculaId) {

                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }

                if (!institution) {
                    res.status(400).send({ message: "Id da intituição não encontrado!" });
                    return;
                }

                if (!student) {
                    res.status(400).send({ message: "Id do aluno não encontrado!" });
                    return;
                }

                if (matriculaId) {

                    calcFaturas.calculateFaturas(req, function (valorFatura, datasVecimento) {

                        faturaModel.createFatura(valorFatura, datasVecimento, matriculaId, function (err, result) {
 
                            if (err) {
                                res.status(500).send({ message: err });
                                return;
                            }
            
                            if (result) {
                                res.status(200).send({ message: "Matricula realizada com sucesso!" });
                                return;
                            }

                        });

                    });

                }

            });

        }

        if (!isValid) {

            res.status(400).send({ message: "conteúdo da requisição é invalido, verifique o valor do curso, quantidade de faturas, vecimentos, e ids da instituição e aluno" }); // change to appropriate message
            return;

        }

    });

}