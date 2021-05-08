const alunoModel = require('../models/alunoModel.js');
const validarAluno = require('../helpers/validarAluno.js');

exports.getAlunos = (req, res) => {

    //To do

}

exports.addAluno = (req, res) => {

    //To do
    validarAluno.validateAlunoData(req, function(isValid){

        if(isValid){
            res.send({message: "conteúdo da requisição é válido"}); // change to appropriate message
            return;
        }

        if(!isValid){
            res.status(400).send({message: "conteúdo da requisição é inválido, verifique o nome, cpf, genero e meio de pagamento"});
            return;
        }

    });

}