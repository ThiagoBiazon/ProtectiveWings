var database = require("../database/config")

function EnviarTentativa(idUsuário, pontuação) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", idUsuário, pontuação);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    INSERT INTO Tentativas (idTentativas, fkJogo, fkUsuário, palavrasAcertadas) SELECT (COUNT(idTentativas) + 1), 1, ${idUsuário}, ${pontuação} FROM Tentativas
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarDados(){
    var instrução = "SELECT idUsuário, nome, sobrenome, palavrasAcertadas FROM Tentativas JOIN Usuário ON idUsuário = fkUsuário ORDER BY palavrasAcertadas DESC limit 10"
    return database.executar(instrução);
}

module.exports = {
EnviarTentativa,
buscarDados
};