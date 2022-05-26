var database = require("../database/config")

let idEmpresa = 0;

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

    idEmpresa += 1;

    console.log("ACESSEI O empresa MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", razao, cnpj,email,representante, senha);
    var instrucao3 = `
        insert into permissao(statusMaquina, historico, gestao, fkEmpresa, fkColaboradorPermissao) values (1, 1, 1, ${idEmpresa}, ${idEmpresa});`;
        var instrucao2 = `
        insert into colaborador(nome, identificacao, email, cargo,senha,fkEmpresa) values ('${representante}', 1, '${email}', 'Representante','${senha}',${idEmpresa} );`;    
    var instrucao = `
        INSERT INTO empresa (razao, cnpj, email, nomeRepresentante, senha) VALUES ('${razao}', '${cnpj}', '${email}','${representante}', '${senha}');`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    database.executar(instrucao);
    database.executar(instrucao2);
    return database.executar(instrucao3);
}






module.exports = {
    entrar,
    cadastrar,
    listar,
};