//Tipos Primitivos
let valor = 300;
let nome = "";
let isPago = false;
let qualquer = "";
qualquer = 10;
//Arryas
const lista = [];
lista.push("teste", 22, "cachorro", 12, true);
const listaNumeros = [];
listaNumeros.push(33, 22, 11, 12, 50);
//Enum
var TipoTransacao;
(function (TipoTransacao) {
    TipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    TipoTransacao["TRANSFERENCIA"] = "Transfer\u00EAncia";
    TipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(TipoTransacao || (TipoTransacao = {}));
const novaTransacao = {
    tipoTransacao: TipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0,
};
