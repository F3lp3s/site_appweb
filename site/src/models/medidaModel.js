var database = require("../database/config");
const { trace } = require("../routes/medidas");



function buscarMemoria() {
    instrucaoSql =  ` select memoriaUso, dataMedicao from medicaoMemoria;`;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function reqInfoMemoria(fkmemoria, fkEquipamento,fkEmpresa) {
    var instrucao = `
    select top(16) idMedicaoMemoria, dataMedicao, memoriaUso, memoriaDisponivel, memoriaTotal from MedicaoMemoria join memoria on fkMemoria= idMemoria
	join  equipamento on idEquipamento = fkEquipamento
    join empresa on idEmpresa = fkEmpresa
 where fkMemoria = ${fkmemoria} and fkEquipamento = ${fkEquipamento}  and fkEmpresa = ${fkEmpresa} ;


    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function reqQtdMemorias(fkEmpresa, fkEquipamento) {
    var instrucao = `
    select idMemoria from memoria join equipamento on idMemoria = idEquipamento 
    where fkEmpresa = ${fkEmpresa} and fkEquipamento = ${fkEquipamento};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function reqInfoEquipamentos(fkEmpresa) {
    var instrucao = `
    select tipoEquipamento, idEquipamento from equipamento where fkEmpresa = ${fkEmpresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarMaquinas(fkEmpresa){
    var instrucao = `
    select * from equipamento where fkEmpresa = ${fkEmpresa};`;

    console.log("Executanto a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

};

function buscarUsoMemoria(idEquipamento){
    var instrucao = `
    select top(1) round(memoriaUso / 1000000000, 0) uso, round(memoriaTotal / 1000000000, 0) total, round((memoriaUso / memoriaTotal) * 100, 0) porcentagemUso
    from medicaoMemoria join memoria on fkMemoria = idMemoria
    join equipamento on fkEquipamento = idEquipamento where idEquipamento = ${idEquipamento} order by idMedicaoMemoria desc;`;

    console.log("Executanto a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

};

function buscarUsoProcessador(idEquipamento){


    var instrucao = `
    select top(1) round(uso ,0) uso from medicaoProcessador  m join processador p on fkProcessador = p.idProcessador
    join equipamento on fkEquipamento = idEquipamento where idEquipamento = ${idEquipamento} order by m.idProcessador desc;`

    console.log("Executanto a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

};

function buscarUsoDisco(idEquipamento){
    var instrucao = `
    select top (1) round(tamanhoUso / 1000000000, 0) uso, round(tamanhoTotal / 1000000000, 0) total, round((tamanhoUso / tamanhoTotal) * 100, -2) porcentagemUso
    from medicaoDisco join disco on fkDisco = idDisco
    join equipamento on fkEquipamento = idEquipamento where idEquipamento = ${idEquipamento} order by idDiscoMedicao desc;`

    console.log("Executanto a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

};


// ------------------funcoes para a tela de gestao-------------
function reqInfoFunc(fkEmpresa) {
    var instrucao = `
    select idColaborador, nome,identificacao from colaborador where fkEmpresa = ${fkEmpresa};`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



function reqInfoPermissoes(fkEmpresa) {
    var instrucao = `
    select * from permissao where fkEmpresa = ${fkEmpresa}`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function updatePermiBanco(updatePagina, fkFuncionario,setPermissao, fkEmpresa) {
    var instrucao = `
    update permissao 
  set ${updatePagina} = ${setPermissao}
   where fkColaboradorPermissao = ${fkFuncionario} and permissao.fkEmpresa = ${fkEmpresa}`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


//------------------- funcoes para a tela historico ------------------------------

function reqInfoMemoriaHistorico(fkEmpresa,data) {
    var instrucao = `
    select memoriaUso,memoriaDisponivel, dataMedicao, fkMemoria,  tipoEquipamento, idEquipamento from medicaoMemoria join memoria on idMedicaoMemoria = fkMemoria
 join Equipamento on fkEquipamento = idEquipamento where equipamento.fkEmpresa = ${fkEmpresa} and dataMedicao >= '${data}';
 `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function reqInfoDiscoHistorico(fkEmpresa,data) {
    var instrucao = `select top(16) idDiscoMedicao, tamanhoUso, tamanhoDisponivel, dataMedicao, idDisco, idEquipamento from medicaoDisco join disco  on fkDisco = idDisco
    join Equipamento on fkEquipamento = idEquipamento where equipamento.fkEmpresa =
  ${fkEmpresa} and dataMedicao >= '${data}';
 `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function reqInfoProcessadorHistorico(fkEmpresa,data) {
    var instrucao = `select processador.idProcessador, dataMedicao ,uso, idEquipamento  from medicaoProcessador join processador on fkprocessador = processador.idprocessador
    join Equipamento on fkEquipamento = idEquipamento where equipamento.fkEmpresa =
  ${fkEmpresa} and dataMedicao >= '${data}';
 `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

/// funcoes para dashboard discos 
function reqQtdDiscos(fkEmpresa, fkEquipamento) {
    var instrucao = `
    select idDisco from disco join equipamento on fkEquipamento = idEquipamento 
    where fkEmpresa = ${fkEmpresa} and fkEquipamento = ${fkEquipamento};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function reqInfoDisco(idDisco, fkEquipamento,fkEmpresa) {
    var instrucao = `
    select top(16) dataMedicao, tamanhoUso, tamanhoDisponivel from medicaoDisco join disco on fkDisco = idDisco 
    join equipamento on fkEquipamento = idEquipamento join
            empresa on fkEmpresa = idEmpresa where fkEmpresa =${fkEmpresa} and fkEquipamento = ${fkEquipamento} and idDisco =${idDisco} order by idDiscoMedicao desc;


    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function atualizarGraficoDisco(idDisco, fkEquipamento,fkEmpresa) {
    var instrucao = `
    select top(1) dataMedicao, tamanhoUso, tamanhoDisponivel from medicaoDisco join disco on fkDisco = idDisco 
    join equipamento on fkEquipamento = idEquipamento join
            empresa on fkEmpresa = idEmpresa where fkEmpresa =${fkEmpresa} and fkEquipamento = ${fkEquipamento} and idDisco =${idDisco} order by idDiscoMedicao desc;


    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// funcoes para dashboard Cpu

function reqQtdCpu(fkEmpresa, fkEquipamento) {
    var instrucao = `
    select processador.idProcessador from processador join equipamento on fkEquipamento = idEquipamento 
    where fkEmpresa = ${fkEmpresa} and fkEquipamento = ${fkEquipamento};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function reqInfoCpu(idCpu, fkEquipamento,fkEmpresa) {
    var instrucao = `
    select top(16)   dataMedicao, uso, frequencia,processos,threads from medicaoProcessador join processador on fkProcessador = processador.idProcessador
    join equipamento on fkEquipamento = idEquipamento join
            empresa on fkEmpresa = idEmpresa where fkEmpresa =${fkEmpresa} and fkEquipamento = ${fkEquipamento} and processador.idProcessador =${idCpu} ;


    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    reqInfoMemoria,
    buscarMemoria,
    reqQtdMemorias,
    reqInfoEquipamentos,
    buscarMaquinas,
    buscarUsoMemoria,
    buscarUsoProcessador,
    buscarUsoDisco,
    reqInfoFunc,
    reqInfoPermissoes,
    updatePermiBanco,
    reqInfoMemoriaHistorico,
    reqInfoDiscoHistorico,
    reqInfoProcessadorHistorico,
    reqQtdDiscos,
    reqInfoDisco,
    reqQtdCpu,
    reqInfoCpu,
    atualizarGraficoDisco
}