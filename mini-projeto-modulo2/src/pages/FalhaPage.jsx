import { Link } from "react-router-dom"

function FalhaPagamento() {
    return (
        <div className="resultado-container falha">
            <div className="resultado-icone">✕</div>
            <h1>Tentativa de golpe detectada</h1>
            <Link to="/pagamento" className="botao-principal">Tentar Novamente</Link>
        </div>
    )
}

export default FalhaPagamento