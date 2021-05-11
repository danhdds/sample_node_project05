const instituicaoEnsinoModel = require('../models/instituicaoEnsinoModel.js');
const validarInstituicaoEnsino = require('../helpers/validarInstituicaoEnsino.js');

exports.getInstituicoesEnsino = (req, res) => {

    instituicaoEnsinoModel.getInstituicoesEnsino(function (err, result) {

        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (result) {
            res.send({ instituicoes: result});
            return;
        }

    });

};

exports.addInstituicaoEnsino = (req, res) => {

    //To do
    validarInstituicaoEnsino.validateInstituicaoData(req, function(isValid){

        if(isValid){

            instituicaoEnsinoModel.createInstituicao(req, function (err, instituicao, result) {

                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }

                if (instituicao) {
                    res.send({ message: "Intituição já cadastrada!" });
                    return;
                }

                if (result) {
                    res.send({ message: "Intituição adicionada com sucesso!" });
                    return;
                }

            });

        }

        if(!isValid){
            res.status(400).send({message: "conteúdo da requisição é invalido, verifique o nome, cnpj, e tipo da instituição"}); // change to appropriate message
            return;
        }

    });

}; // end addInstituicaoEnsino