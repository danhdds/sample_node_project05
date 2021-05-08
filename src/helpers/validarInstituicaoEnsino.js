
const validNome = /([a-zA-Z]{3,})/g
const validCnpj = /([0-9]{14,})/
const validTipo = /(universidade|escola|creche)/gi

exports.validateInstituicaoData = (req, callback) => {

    if(validNome.test(req.body.nome) && validCnpj.test(req.body.cnpj) && validTipo.test(req.body.tipo)){

        callback(true);

    }else {

        callback(false);

    } // end if else

} // end validateInstituicaoData