// Remove espaços e hífens do número do cartão.
export function limparNumeroCartao(numeroCartao) {
    return numeroCartao.replace(/[\s-]/g, "")
}

// Verifica se todos os numeros do cartão são iguais
// 1111 = true : 1234 = false
export function possuiDigitosRepetidos(numeroLimpo) {
    // Pega o primeiro digito do cartão e compara se algum digito é diferente
    // Diferente = false : true
    const primeiroDigito = numeroLimpo[0]
    return numeroLimpo.split("").every((digito) => digito === primeiroDigito)
}
