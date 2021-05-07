instituicaoEnsinoController = require('../controllers/instituicaoEnsinoController.js');
alunoController = require('../controllers/alunoController.js');
matriculaController = require('../controllers/matriculaController.js');
faturaController = require('../controllers/faturaController.js');

matriculaController = require('../controllers/matriculaController.js');

exports.appRouter = router => {

    router.get('/instituicoes-ensino', instituicaoEnsinoController.getInstituicoesEnsino);
    router.post('/criar-instituicao-ensino', instituicaoEnsinoController.setInstituicaoEnsino);

    router.get('/alunos', alunoController.getAlunos);
    router.post('/criar-aluno', alunoController.setAluno);

    router.get('/matriculas', matriculaController.getMatriculas);
    router.post('/criar-matricula', matriculaController.setMatricula);

    router.get('/faturas', faturaController.getFaturas);
    router.post('/criar-fatura', faturaController.setFatura);

} // end appRouter