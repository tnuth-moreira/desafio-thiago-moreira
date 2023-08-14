const formaDePagamento = [debito, credito, dinheiro];



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

            return "";
        }

    }

export { CaixaDaLanchonete };
