const dbConfig = require('../config/dbConfig.js');

dbConfig.connectDbServer(function (connection) {

    connection.connect();

    connection.query('CREATE DATABASE IF NOT EXISTS billindo_db', function (err, result) {

        if (err) throw err;
        console.log('banco de dados billindo_db criado: ', result);
        createTables();

    });

    connection.end();

});

const createTables = ()=> {

    dbConfig.connectBillindoDb(function (connection) {

        connection.connect();

        connection.query('CREATE TABLE IF NOT EXISTS intituicao_ensino ( id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(150) NOT NULL, cnpj VARCHAR(150) NOT NULL, tipo VARCHAR(50) NOT NULL )', function (err, result) {

            if (err) throw err;
            console.log('tabela intituica_ensino criada: ', result);

        });

        connection.query('CREATE TABLE IF NOT EXISTS aluno ( id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(150) NOT NULL, cpf VARCHAR(150) NOT NULL, data_nascimento DATE, telefone_celular VARCHAR(150), genero VARCHAR(8) NOT NULL,  meio_pagamento_faturas VARCHAR(30) NOT NULL )', function (err, result) {

            if (err) throw err;
            console.log('tabela aluno criada: ', result);

        });

        connection.query('CREATE TABLE IF NOT EXISTS matricula ( id INT AUTO_INCREMENT PRIMARY KEY, valor_total_curso DOUBLE NOT NULL, quantidade_faturas INT NOT NULL, dia_vencimento_faturas INT NOT NULL, nome_curso VARCHAR(150) NOT NULL, id_instituicao INT NOT NULL, FOREIGN KEY (id_instituicao) REFERENCES intituicao_ensino(id), id_aluno INT NOT NULL, FOREIGN KEY (id_aluno) REFERENCES aluno(id))', function (err, result) {

            if (err) throw err;
            console.log('tabela matricula criada: ', result);

        });

        connection.query('CREATE TABLE IF NOT EXISTS fatura ( id INT AUTO_INCREMENT PRIMARY KEY, valor_fatura DOUBLE NOT NULL, data_vencimento DATE NOT NULL, status VARCHAR(150) NOT NULL DEFAULT "aberta", id_matricula INT NOT NULL, FOREIGN KEY (id_matricula) REFERENCES matricula(id))', function (err, result) {

            if (err) throw err;
            console.log('tabela fatura criada: ', result);

        });

        connection.end();

    });

} // end createTables