
class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        let cardapio = {
            cafe: 3,
            chantily: 1.5,
            suco: 6.2,
            sanduiche: 6.5,
            queijo: 2,
            salgado: 2,
            combo1: 9.5,
            combo2: 7.5
        };

        let itensComprados = [];

        let total = 0;

        for (const itemCaixa of itens) {
            const [codigo, quantidade] = itemCaixa.split(',');

            if (!cardapio[codigo]) {
                return "Item inválido!";
            }

            if (itensComprados.includes(codigo)) {
                const itensCompradosValidos = itensComprados.filter(item => itens.inclubes(`${item},1`));
                if (!itensCompradosValidos.length) {
                    return "Item extra não pode ser pedido sem o principal";
                }
            }
            total += precos[codigo] * parseInt(quantidade);

            if (metodoDePagamentoDePagamento === "debito") {
                total = total * 0.95;

            } else if
                (metodoDePagamentoPagamento === "credito") {
                total = total * 1.1;

            } else if
                (metodoDePagamento === "dinheiro") {
                total;

            } else {
                return "Forma de pagamento inválida!";
            }

            return `R$ ${total.toFixed(2).replace('.', ',')}`;
        }

    }

}

export { CaixaDaLanchonete };
