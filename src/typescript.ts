//Tipos Primitivos
let valor: number = 300;
let nome: string = "";
let isPago: boolean = false;
let qualquer: any = "";
qualquer = 10;

//Arryas
const lista = [];
lista.push("teste", 22, "cachorro", 12, true);

const listaNumeros: number[] = [];
listaNumeros.push(33, 22, 11, 12, 50);

//Tipos personalizados (Type Alias)
type Transacao = {
    tipoTransacao: TipoTransacao;
    data: Date;
    valor: number;
}

//Enum
enum TipoTransacao{
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
}


const novaTransacao: Transacao = {
    tipoTransacao: TipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0,
}