var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");


// funcoes para a tela de memora

router.get("/Memoria", function (req, res) {
    medidaController.buscarMemoria(req, res);
});

router.post("/reqInfoMemoria", function (req, res) {
    medidaController.reqInfoMemoria(req, res);
});

router.post("/reqQtdMemorias", function (req, res) {
    medidaController.reqQtdMemorias(req, res);
});

router.post("/reqInfoEquipamentos", function (req, res) {
    medidaController.reqInfoEquipamentos(req, res);
});

router.get("/buscarMaquinas/:idEmpresa", function(req, res){
    medidaController.buscarMaquinas(req,res);
});

router.get("/buscarUsoProcessador/:idEquipamento", function(req, res){
    medidaController.buscarUsoProcessador(req,res);
});

router.get("/buscarUsoMemoria/:idEquipamento", function(req, res){
    medidaController.buscarUsoMemoria(req,res);
});

router.get("/buscarUsoDisco/:idEquipamento", function(req, res){
    medidaController.buscarUsoDisco(req,res);
});

// funcoes para a tela de gestao
router.post("/reqInfoFunc", function (req, res) {
    medidaController.reqInfoFunc(req, res);
});

router.post("/reqInfoPermissoes", function (req, res) {
    medidaController.reqInfoPermissoes(req, res);
});

router.post("/updatePermiBanco", function (req, res) {
    medidaController.updatePermiBanco(req, res);
});


router.post("/reqInfoMemoriaHistorico", function (req, res) {
    medidaController.reqInfoMemoriaHistorico(req, res);
});


router.post("/reqInfoDiscoHistorico", function (req, res) {
    medidaController.reqInfoDiscoHistorico(req, res);
});


router.post("/reqInfoProcessadorHistorico", function (req, res) {
    medidaController.reqInfoProcessadorHistorico(req, res);
});


//// funcoes para dashboard de discos


router.post("/reqQtdDiscos", function (req, res) {
    medidaController.reqQtdDiscos(req, res);
});


router.post("/reqInfoDisco", function (req, res) {
    medidaController.reqInfoDisco(req, res);
});


/// funcoes para a dashboard Cpu


router.post("/reqQtdCpu", function (req, res) {
    medidaController.reqQtdCpu(req, res);
});


router.post("/reqInfoCpu", function (req, res) {
    medidaController.reqInfoCpu(req, res);
});

router.post("/atualizarGraficoDisco", function (req, res) {
    medidaController.atualizarGraficoDisco(req, res);
});

router.post("/atualizarGraficoMemoria", function (req, res) {
    medidaController.atualizarGraficoMemoria(req, res);
});

router.post("/atualizarGraficoCpu", function (req, res) {
    medidaController.atualizarGraficoCpu(req,res);
})



module.exports = router;