var database = require("../database/config")

function listar() {
    console.log("ACESSEI O colaborador MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM Colaborador;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



function cadastrar(nome, identificacao, email, cargo, senha, fkEmpresa) {
    console.log("ACESSEI O colaborador MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, identificacao, email, cargo, senha);

    var instrucao = `
        INSERT INTO colaborador (nome, identificacao, email,cargo, senha,fkEmpresa) VALUES ('${nome}', '${identificacao}', '${email}','${cargo}', '${senha}' ,${fkEmpresa});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);

}

function cadastrarPermissao(email, senha){

    var instrucao = `
       insert into permissao(statusMaquina, historico, gestao, fkEmpresa, fkColaboradorPermissao)
       select 0, 0, 0, fkEmpresa, idColaborador from colaborador where email = '${email}' and senha = '${senha}';`

   return database.executar(instrucao);

}

function removerFuncionario(idFunc, nomeFunc, fkEmpresa) {
    var instrucao1 = `delete from permissao where fkColaboradorPermissao = ${idFunc} and fkEmpresa = ${fkEmpresa}`
    var instrucao2 = `delete from colaborador where idColaborador = ${idFunc} and nome = '${nomeFunc}'`
    database.executar(instrucao1);
    return database.executar(instrucao2);
}

module.exports = {
    cadastrar,
    listar,
    cadastrarPermissao,
    removerFuncionario  
};