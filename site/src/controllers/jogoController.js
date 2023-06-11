var jogoModel = require("../models/jogoModel");

function EnviarTentativa(req, res) {
    var idUsuário = req.body.idUsuárioServer
    var pontuação = req.body.pontuaçãoServer

    // Faça as validações dos valores
    if (idUsuário == undefined) {
        res.status(400).send("Seu idUsuário está undefined!");
    } else if (pontuação == undefined) {
        res.status(400).send("Sua pontuação está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        jogoModel.EnviarTentativa(idUsuário, pontuação)
            .then(
                function (resultado) {
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
            );
    }
}

function buscarDados(req, res) {
    jogoModel.buscarDados()
    .then(function (resultado) {
            console.log(resultado)
            if (resultado.length > 0) {
                res.status(200).json(resultado)
            } else {
                res.status(204).send("Nenhum resultado foi encontrado")
            }
        }).catch(
            function(erro){
                console.log (erro)
                console.log ("Houve um erro ao realizar a consulta, erro:", erro.sqlMessage)
                res.status(500).json(erro.sqlMessage)
            }
        )
}

module.exports = {
    EnviarTentativa,
    buscarDados
}

