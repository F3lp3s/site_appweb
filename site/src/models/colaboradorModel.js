var database = require("../database/config")
let idColaborador = 1;

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

    idColaborador += 1;

    var instrucao2 = `
    insert into permissao(statusMaquina, historico, gestao, fkEmpresa, fkColaboradorPermissao) values (0, 0, 0, ${fkEmpresa}, ${idColaborador});`;

    var instrucao = `
        INSERT INTO Colaborador (nome, identificacao, email,cargo, senha,fkEmpresa) VALUES ('${nome}', '${identificacao}', '${email}','${cargo}', '${senha}' ,${fkEmpresa});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);

    database.executar(instrucao);
    return database.executar(instrucao2);

}





module.exports = {
    cadastrar,
    listar

};