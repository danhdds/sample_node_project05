const alunoModel = require('../models/alunoModel.js');
const validarAluno = require('../helpers/validarAluno.js');

exports.getAlunos = (req, res) => {

    alunoModel.getAlunos(function (err, result) {

        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (result) {
            res.send({ alunos: result});
            return;
        }

    });

}

exports.addAluno = (req, res) => {

    validarAluno.validateAlunoData(req, function (isValid) {

        if (isValid) {

            alunoModel.createAluno(req, function (err, user, result) {

                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }

                if (user) {
                    res.send({ message: "Aluno já cadastrado!" });
                    return;
                }

                if (result) {
                    res.send({ message: "Aluno adicionado com sucesso!" });
                    return;
                }

            });

        }

        if (!isValid) {
            res.status(400).send({ message: "conteúdo da requisição é inválido, verifique o nome, cpf, genero e meio de pagamento" });
            return;
        }

    });

}