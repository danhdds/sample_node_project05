
const validNome = /([a-zA-Z]{3,})/g
const validCnpj = /([0-9]{14,})/
const validTipo = /(universidade|escola|creche)/gi

exports.validateInstituicaoData = (req, callback) => {

    if( (req.body.nome).match(validNome) && (req.body.cnpj).match(validCnpj) && (req.body.tipo).match(validTipo) ){

        callback(true)

    }else {

        callback(false);

    } // end if else

} // end validateInstituicaoData