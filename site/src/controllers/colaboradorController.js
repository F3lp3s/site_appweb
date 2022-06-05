var colaboradorModel = require("../models/colaboradorModel");

var sessoes = [];






function cadastrar(req, res) {
    var nome = req.body.nome;
    var identificacao = req.body.identificacao;
    var email = req.body.email;
    var cargo = req.body.cargo;
    var senha = req.body.senha;
    var fkEmpresa = req.body.fkEmpresa;
    

    

    if (nome == undefined) {
        res.status(400).send("Seu nomeColaborador está undefined!");
    } else if (identificacao == undefined) {
        res.status(400).send("Sua identificação está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    }else if (cargo == undefined) {
        res.status(400).send("Seu cargo está undefined!");
    }else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }else if (fkEmpresa == undefined) {
        res.status(400).send("Sua fkEmpresa está undefined!");
      } else {
        colaboradorModel.cadastrar(nome, identificacao, email,cargo, senha,fkEmpresa)
            .then(
                function () {
                    colaboradorModel.cadastrarPermissao(email, senha)
                        .then(
                            function (resultado){
                                res.json(resultado);
                            }

                        ).catch(
                            function (erro) {
                                console.log(erro);
                                console.log(
                                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                                    erro.sqlMessage
                                );
                                res.status(500).json(erro.sqlMessage);
                            }
                        )
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listar(req,res){

    caminhaoModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a listagem! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function removerFuncionario(req, res) {
    var idFunc = req.body.idFunc;
    var nomeFunc = req.body.nomeFunc;
    var fkEmpresa = req.body.fkEmpresa;
    
    colaboradorModel.removerFuncionario(idFunc, nomeFunc, fkEmpresa)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a listagem! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    cadastrar,
    listar,
    removerFuncionario
}