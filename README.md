## API para gerenciamento de instituições de ensino, alunos, matriculas e faturas.

### Como instalar em ambiente local

* Antes de iniciar rodar a aplicação configure o arquivo `.env` para refletir a configuração de seu servidor de dados local.
* Execute o comando: `npm intall`
* Execute o comando: `npm start`
* Após esses procedimentos o script `./src/database/seeder.js` vai criar o banco de dados com as tabelas necessárias para a simulação.

OBS: Versão do servidor em que realizei meus testes: 5.7.32 - MySQL Community Server (GPL)

### Formatação dos dados para teste - Exemplos

#### Para teste em ambiente local - Recomendo utilizar o POSTMAN - https://www.postman.com/

##### Instituição - POST - http://localhost:5000/criar-instituicao-ensino

`{"nome": "ufpa", "cnpj": "34621748000123", "tipo": "Universidade"}`

##### Aluno - POST - http://localhost:5000/criar-aluno

`{"nome": "Danilo dos Santos Abreu", "cpf": "95202682179", "dataNascimento": "1984-06-11", "telefone": "932392982", "genero": "M", "meioPagamento": "cartao"}`

##### Matrícula - POST - http://localhost:5000/criar-matricula

`{"valorCurso": "2000.00", "quantidadeFaturas": "2", "diaVenceFatura": "10", "nomeCurso":"Eng. Software", "idInstituicao": "1", "idAluno": "1"}`

### * Listagem - GET *

##### Instituições - GET http://localhost:5000/instituicoes-ensino

##### Alunos - GET http://localhost:5000/alunos

##### Matrículas - GET http://localhost:5000/matriculas

##### Faturas - http://localhost:5000/faturas


## TO DO List

- [ ] Formatar Datas;
- [ ] Formatar Valores BRL;
- [ ] Realizar testes unitários;
- [ ] Fazer deploy no Heroku;
- [ ] Refatoração de códigos, melhorias baseados no contexto do negócio e melhorar código aplicando principios do clean code;
- [ ] Implementar log do servidor;
- [ ] Comentar partes pertinentes do código.
