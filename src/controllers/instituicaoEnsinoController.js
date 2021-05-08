const instituicaoModel = require('../models/instituicaoEnsinoModel.js');
const validarInstituicaoEnsino = require('../helpers/validarInstituicaoEnsino.js');

exports.getInstituicoesEnsino = (req, res) => {

    //To do 

}

exports.addInstituicaoEnsino = (req, res) => {

    //To do
    validarInstituicaoEnsino.validateInstituicaoData(req, function(isValid){

        if(isValid){
            res.send({message: "conteúdo da requisição é valido"}); // change to appropriate message
            return;
        }

        if(!isValid){
            res.status(400).send({message: "conteúdo da requisição é invalido, verifique o nome, cnpj, e tipo da instituição"}); // change to appropriate message
            return;
        }

    });

} // end addInstituicaoEnsino