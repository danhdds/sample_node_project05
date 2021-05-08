instituicaoEnsinoController = require('../controllers/instituicaoEnsinoController.js');
alunoController = require('../controllers/alunoController.js');
matriculaController = require('../controllers/matriculaController.js');
faturaController = require('../controllers/faturaController.js');

matriculaController = require('../controllers/matriculaController.js');

exports.appRouter = router => {

    router.get('/instituicoes-ensino', instituicaoEnsinoController.getInstituicoesEnsino);
    router.post('/criar-instituicao-ensino', instituicaoEnsinoController.addInstituicaoEnsino);

    router.get('/alunos', alunoController.getAlunos);
    router.post('/criar-aluno', alunoController.addAluno);

    router.get('/matriculas', matriculaController.getMatriculas);
    router.post('/criar-matricula', matriculaController.addMatricula);

    router.get('/faturas', faturaController.getFaturas);

} // end appRouter