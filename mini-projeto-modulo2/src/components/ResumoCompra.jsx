import { useNavigate } from "react-router-dom";
import { formatarMoeda } from "../utils/formatarMoeda.js";
import { produtos } from "../data/produtos.js"
import "../assets/styles/ResumoCompra.css"

// ALTERAÇÃO: Adicionada a prop exibirBotaoFinalizar (padrão true) para controlar a exibição do botão
function ResumoCompra({ produtos, total, exibirBotaoFinalizar = true }) {
    const navigate = useNavigate()

    function handleFinalizarCompra() {
        navigate("/pagamento")
    }

    return (
        /* ALTERAÇÃO: Envolvido em um container único com a classe "resumo-compra-container" 
           para que o grid de 2 colunas do PagamentoPage posicione o resumo corretamente ao lado */
        <div className="resumo-compra-wrapper">
            <aside className="resumo-compra">
                <h2>Resumo Compra</h2>
                {/* ALTERAÇÃO: Adicionado fallback (produtos || []) para evitar erro caso não seja passado */}
                {(produtos || []).map((produto) => (
                    <div key={produto.id} className="resumo-item">
                        <span>{produto.nome}</span>
                        <span>R$ {produto.preco.toFixed(2)}</span>
                    </div>
                ))}
                <strong className="resumo-subtotal-destaque">
                    Total: R$ {total.toFixed(2)}
                </strong>
            </aside>

            <div className="resumo-compra">
                <div className="resumo-total">
                    <span>Total:</span>
                    <span className="resumo-total-valor">{formatarMoeda(total)}</span>
                </div>

                {/* Para renderizar somente na página de carrinho e não mostrar na página de pagamento */}
                {exibirBotaoFinalizar && (
                    <button className="botao-principal" onClick={handleFinalizarCompra}>
                        Finalizar Compra
                    </button>
                )}
            </div>
        </div>
    )

}

export default ResumoCompra