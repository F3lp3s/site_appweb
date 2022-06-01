var database = require("../database/config")

function listar() {
    console.log("ACESSEI O empresa MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM empresa;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O empresa MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
select p.fkEmpresa idEmpresa, email, senha, nome, p.statusMaquina status, p.historico, p.gestao
    from colaborador left join permissao p on idColaborador = fkColaboradorPermissao where email = '${email}' and senha = '${senha}'
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(razao, cnpj, email,representante, senha) {

    console.log("ACESSEI O empresa MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", razao, cnpj,email,representante, senha);
    var instrucao = `
        INSERT INTO empresa (razao, cnpj, email, nomeRepresentante, senha) VALUES ('${razao}', '${cnpj}', '${email}','${representante}', '${senha}');`;
        
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}

function cadastrarComoColaborador(email, senha){

    var instrucao = `
    insert into colaborador (nome, identificacao, email, cargo, senha, fkEmpresa)
    select nomeRepresentante, '0001', email, 'representante', senha, idEmpresa from empresa where email = '${email}' and senha = '${senha}';`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}

function cadastrarPermissao(email, senha){
    console.log("ACESSEI O empresa MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", email, senha);


    var instrucao = `
        insert into permissao(statusMaquina, historico, gestao, fkEmpresa, fkColaboradorPermissao)
        select 1, 1, 1, fkEmpresa, idColaborador from colaborador where email = '${email}' and senha = '${senha}';`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}






module.exports = {
    entrar,
    cadastrar,
    listar,
    cadastrarComoColaborador,
    cadastrarPermissao
};