import { useNavigate } from "react-router-dom";
import { formatarMoeda } from "../utils/formatarMoeda.js";
import "../assets/styles/ResumoCompra.css"

function ResumoCompra({ total }) {
    const navigate = useNavigate()

    function handleFinalizarCompra() {
        navigate("/pagamento")
    }

    return (
        <div className="resumo-compra">
            <div className="resumo-total">
                <span>Total:</span>
                <span className="resumo-total-valor">{formatarMoeda(total)}</span>
            </div>

            <button className="botao-finalizar" onClick={handleFinalizarCompra}>Finalizar Compra</button>
        </div>
    )

}

export default ResumoCompra