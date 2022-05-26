var medidaModel = require("../models/medidaModel");




function buscarMemoria(req, res) {

    


    var memoria_uso = req.params.memoria_uso;
    var data_medicao = req.params.data_medicao;

    

    medidaModel.buscarMemoria(memoria_uso,data_medicao).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function reqInfoMemoria(req, res) {
    var fkmemoria = req.body.fkmemoria;
    var fkEquipamento = req.body.fkEquipamento
    var fkEmpresa = req.body.fkEmpresa
    medidaModel.reqInfoMemoria(fkmemoria,fkEquipamento,fkEmpresa)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


function reqQtdMemorias(req, res) {
    var fkEmpresa = req.body.fkEmpresa;
    var fkEquipamento = req.body.fkEquipamento;
    medidaModel.reqQtdMemorias(fkEmpresa, fkEquipamento)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

    function reqInfoEquipamentos(req, res){
        var fkEmpresa = req.body.fkEmpresa; 
        medidaModel.reqInfoEquipamentos(fkEmpresa)
            .then(function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!")
                }
            }).catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    };

    function buscarMaquinas(req,res){

        let fkEmpresa = req.params.idEmpresa;

        medidaModel.buscarMaquinas(fkEmpresa)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

    };
    
    function buscarUsoProcessador(req,res){

        let idEquipamento = req.params.idEquipamento;

        medidaModel.buscarUsoProcessador(idEquipamento)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

    };

    function buscarUsoMemoria(req,res){

        let idEquipamento = req.params.idEquipamento;

        medidaModel.buscarUsoMemoria(idEquipamento)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

    };

    function buscarUsoDisco(req,res){

        let idEquipamento = req.params.idEquipamento;

        medidaModel.buscarUsoDisco(idEquipamento)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

    };
  //--------------------------funcoes da tela de gestao-------------------
  function reqInfoFunc(req, res) {
    var fkEmpresa = req.body.fkEmpresa
    medidaModel.reqInfoFunc(fkEmpresa)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function reqInfoPermissoes(req, res) {
    var fkEmpresa = req.body.fkEmpresa
    medidaModel.reqInfoPermissoes(fkEmpresa)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


function updatePermiBanco(req, res) {
    var updatePagina = req.body.updatePagina;
    var fkColaborador = req.body.fkColaborador;
    var setPermissao = req.body.setPermissao;
    var fkEmpresa = req.body.fkEmpresa;
    
    medidaModel.updatePermiBanco(updatePagina,fkColaborador,setPermissao, fkEmpresa)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


//-----------------------------

// funcoes pagina de historico
function reqInfoMemoriaHistorico(req, res) {
    var fkEmpresa = req.body.fkEmpresa
    var data = req.body.data
    medidaModel.reqInfoMemoriaHistorico(fkEmpresa, data)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function reqInfoDiscoHistorico(req, res) {
    var fkEmpresa = req.body.fkEmpresa
    var data = req.body.data
    medidaModel.reqInfoDiscoHistorico(fkEmpresa, data)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function reqInfoProcessadorHistorico(req, res) {
    var fkEmpresa = req.body.fkEmpresa;
    var data = req.body.data;
    medidaModel.reqInfoProcessadorHistorico(fkEmpresa,data)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}/// funcoes para a pagina de disco

function reqQtdDiscos(req, res) {
    var fkEmpresa = req.body.fkEmpresa;
    var fkEquipamento = req.body.fkEquipamento;
    medidaModel.reqQtdDiscos(fkEmpresa, fkEquipamento)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function reqInfoDisco(req, res) {
    var idDisco = req.body.idDisco;
    var fkEquipamento = req.body.fkEquipamento
    var fkEmpresa = req.body.fkEmpresa
    medidaModel.reqInfoDisco(idDisco,fkEquipamento,fkEmpresa)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


/// funcoes para a pagina de cpu

function reqQtdCpu(req, res) {
    var fkEmpresa = req.body.fkEmpresa;
    var fkEquipamento = req.body.fkEquipamento;
    medidaModel.reqQtdDiscos(fkEmpresa, fkEquipamento)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function reqInfoCpu(req, res) {
    var idCpu = req.body.idCpu;
    var fkEquipamento = req.body.fkEquipamento
    var fkEmpresa = req.body.fkEmpresa
    medidaModel.reqInfoCpu(idCpu,fkEquipamento,fkEmpresa)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


module.exports = {
    reqInfoMemoria,
    buscarMemoria,
    reqQtdMemorias,
    reqInfoEquipamentos,
    buscarMaquinas,
    buscarUsoProcessador,
    buscarUsoMemoria,
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
}   