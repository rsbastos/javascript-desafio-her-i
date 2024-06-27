let vitorias = 234
let derrotas = 100
let nivel;



function calcularSaldoDeVitórias(vitorias, derrotas) {
    saldo = vitorias - derrotas
    
    if (saldo <= 10) {
        nivel = "Ferro";
    } else if (saldo <= 20) {
        nivel = "Bronze";
    } else if (saldo <= 50) {
        nivel = "Prata";
    } else if (saldo <= 80) {
        nivel = "Ouro";
    } else if (saldo <= 90) {
        nivel = "Diamante";
    } else if (saldo <= 100) {
        nivel = "Lendario";
    } else {
        nivel = "Imortal"
    }
}

calcularSaldoDeVitórias(vitorias, derrotas);

console.log("O herói tem um saldo de " + saldo + " vitórias e está no nível " + nivel)