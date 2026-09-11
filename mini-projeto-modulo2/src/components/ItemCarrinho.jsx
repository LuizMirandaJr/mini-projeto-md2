import { formatarMoeda } from "../utils/formatarMoeda.js";
import "../assets/styles/ItemCarrinho.css"

function ItemCarrinho({ nome, preco, quantidade }) {
    const subtotal = preco * quantidade;

    return (
        <div className="item-carrinho">
            <span className="coluna-produto">{nome}</span>
            <span className="coluna-preco">{formatarMoeda(preco)}</span>
            <span className="coluna-quantidade">{quantidade}</span>
            <span className="coluna-subtotal">{formatarMoeda(subtotal)}</span>
        </div>
    );
}

export default ItemCarrinho