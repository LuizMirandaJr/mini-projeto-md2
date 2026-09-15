import { useNavigate } from "react-router-dom";
import { formatarMoeda } from "../utils/formatarMoeda.js";
import "../assets/styles/ResumoCompra.css"


function ResumoCompra({ produtos, total, exibirBotaoFinalizar = true }) {
    const navigate = useNavigate()

    function handleFinalizarCompra() {
        navigate("/pagamento")
    }

    return (

        <div className="resumo-compra-wrapper">
            <aside className="resumo-compra">
                <h2>Resumo Compra</h2>

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