
const datasVecimento = [];
var valorFatura, currentMonth, currentYear, dataFatura, decimal;

exports.calculateFaturas = (req, callback) => {

    dataFatura = new Date();
    currentMonth = dataFatura.getMonth();
    currentYear = dataFatura.getFullYear();

    valorFatura = (parseFloat(req.body.valorCurso)/parseFloat(req.body.quantidadeFaturas));

    // set first month
    dataFatura = addMes(new Date(currentYear+"/"+currentMonth+"/"+req.body.diaVenceFatura), 2);

    datasVecimento.push(dataFatura.getFullYear()+"-"+dataFatura.getMonth()+"-"+dataFatura.getDate());
    
    for(let i = 0; i < parseInt(req.body.quantidadeFaturas)-1; i++){

        dataFatura = addMes(new Date(dataFatura.getFullYear()+"/"+(dataFatura.getMonth())+"/"+dataFatura.getDate()), 2);

        datasVecimento.push(dataFatura.getFullYear()+"-"+dataFatura.getMonth()+"-"+dataFatura.getDate());

    } // end for

    callback(valorFatura, datasVecimento);

} 

function addMes (date, i) {

    date.setMonth(date.getMonth() + i * 1); 
    return date; 

};