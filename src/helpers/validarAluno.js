
const validNome = /([a-zA-Z]{3,})/g;
const validCpf = /([0-9]{11,})/;
const validGenero = /(M|F)/gi;
const validMeioPagamento = /(boleto|cartao)/gi;

exports.validateAlunoData = (req, callback) => {

    if( (req.body.nome).match(validNome) && (req.body.cpf).match(validCpf) && (req.body.genero).match(validGenero) && (req.body.meioPagamento).match(validMeioPagamento) ){

        callback(true)

    }else {

        callback(false);

    } // end if else

} // end validateInstituicaoData