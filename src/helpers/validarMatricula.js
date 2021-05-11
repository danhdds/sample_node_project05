
const validValorCurso = /[0-9]\.+\d{1,3}?$/;
const validFaturaEvencimento = /^[0-9]*$/; 
const validNomeCurso = /([a-zA-Z]{3,})/g;
const validId = /(^[0-9]*)(?!\s*$).+/; 

exports.validateMatriculaData = (req, callback) => {

    if( (req.body.valorCurso).match(validValorCurso) && parseInt(req.body.valorCurso) > 0 && (req.body.quantidadeFaturas).match(validFaturaEvencimento) && parseInt(req.body.quantidadeFaturas) >= 1 && (req.body.diaVenceFatura).match(validFaturaEvencimento) && parseInt(req.body.diaVenceFatura) >= 1 && parseInt(req.body.diaVenceFatura) <= 31 && (req.body.nomeCurso).match(validNomeCurso) && (req.body.idInstituicao).match(validId) && (req.body.idAluno).match(validId) ){

        callback(true)

    }else {

        callback(false);

    } // end if else

} // end validateInstituicaoData