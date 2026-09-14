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

export function formatarNumeroCartao(valor) {
    // Remove tudo que não for número e limita a 16 dígitos
    const numeros = valor.replace(/\D/g, "").slice(0, 16)

    // Faz a máscara para ficar de 4 em 4 digitos => 1234 1234 1234 1234
    const blocos = numeros.match(/.{1,4}/g) || []

    // Retira os espaços entre os números "1234 5678 9012 3456"
    return blocos.join(" ")
}
