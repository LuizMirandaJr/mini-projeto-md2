import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { limparNumeroCartao, possuiDigitosRepetidos } from "../utils/valildarCartao"

export function usePagamento() {
    const [processando, setProcessando] = useState(false)

    const navigate = useNavigate()


    function simularProcessamentoPagamento() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 2000)
        })
    }

    async function processarPagamento(dados) {

        if (processando) return
        setProcessando(true)

        await simularProcessamentoPagamento()

        const numeroLimpo = limparNumeroCartao(dados.numeroCartao)
        const quantidadeDigitos = numeroLimpo.length === 16
        const cartaoSuspeito = quantidadeDigitos && possuiDigitosRepetidos(numeroLimpo)

        setProcessando(false)

        if (cartaoSuspeito) {
            navigate("/falha")
            return
        }

        navigate("/sucesso")
    }
    return { processarPagamento, processando }
}