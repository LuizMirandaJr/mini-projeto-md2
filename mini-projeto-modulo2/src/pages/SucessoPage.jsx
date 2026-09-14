import { Link } from "react-router-dom"

function SucessoPagamento() {
    return (
        <div className="resultado-container sucesso">
            <div className="resultado-icone">✓</div>
            <h1>Compra aprovada</h1>
            < Link to="/" className="botao-principal">Voltar para carrinho</Link>
        </div>
    )
}

export default SucessoPagamento