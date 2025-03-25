// script.js

function finalizarPedido() {
    const espetosSelecionados = [];
    const arrozSelecionado = [];
    const acompanhamentosSelecionados = [];

    // Coletar os espetos selecionados
    document.querySelectorAll('.espeto:checked').forEach(input => {
        espetosSelecionados.push({ nome: input.getAttribute('data-nome'), preco: input.getAttribute('data-preco') });
    });

    // Coletar os arrozes selecionados
    document.querySelectorAll('.arroz:checked').forEach(input => arrozSelecionado.push(input.getAttribute('data-nome')));

    // Coletar os acompanhamentos selecionados
    document.querySelectorAll('.acompanhamentos:checked').forEach(input => acompanhamentosSelecionados.push(input.getAttribute('data-nome')));

    if (espetosSelecionados.length === 0) {
        alert('Por favor, selecione ao menos um espeto!');
        return;
    }

    let mensagem = 'Pedido:\n';

    espetosSelecionados.forEach(espetinho => {
        mensagem += `${espetinho.nome} (R$${espetinho.preco})\n`;
    });

    if (arrozSelecionado.length > 0) {
        mensagem += `Arroz: ${arrozSelecionado.join(', ')}\n`;
    }
    if (acompanhamentosSelecionados.length > 0) {
        mensagem += `Acompanhamentos: ${acompanhamentosSelecionados.join(', ')}\n`;
    }

    // Cálculo do total
    let total = 0;
    espetosSelecionados.forEach(espetinho => {
        total += parseFloat(espetinho.preco);
    });

    // Adiciona a entrega (R$2,00 de entrega se o total for abaixo de R$30,00)
    const entrega = total >= 30 ? 0 : 2;
    mensagem += `\nEntrega: R$${entrega},00\n`;
    mensagem += `Total: R$${total + entrega},00`;

    // Gerar o link do WhatsApp
    const whatsappLink = `https://wa.me/5598985349559?text=${encodeURIComponent(mensagem)}`;

    // Redireciona para o WhatsApp
    window.location.href = whatsappLink;
}
