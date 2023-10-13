function calcular() {
    const numero1 = parseFloat(document.getElementById('numero1').value); // Obtém o primeiro número
    const numero2 = parseFloat(document.getElementById('numero2').value); // Obtém o segundo número
    const operacao = document.getElementById('operacao').value; // Obtém a operação selecionada
    let resultado;

    switch (operacao) {
        case 'soma':
            resultado = numero1 + numero2; // Realiza a adição
            break;
        case 'subtracao':
            resultado = numero1 - numero2; // Realiza a subtração
            break;
        case 'multiplicacao':
            resultado = numero1 * numero2; // Realiza a multiplicação
            break;
        case 'divisao':
            if (numero2 === 0) {
                resultado = 'Divisão por zero'; // Verifica a divisão por zero
            } else {
                resultado = numero1 / numero2; // Realiza a divisão
            }
            break;
        default:
            resultado = 'Operação inválida'; // Trata operações inválidas
    }

    document.getElementById('resultado').textContent = `Resultado: ${resultado}`; // Exibe o resultado na página
}
