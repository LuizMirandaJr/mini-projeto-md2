import { produtos as produtosCarrinho } from "../data/produtos";
import ItemCarrinho from "../components/ItemCarrinho"
import ResumoCompra from "../components/ResumoCompra";
import "../assets/styles/carrinho.css"

function Carrinho() {
    const total = produtosCarrinho.reduce(
        (acumulado, produto) => acumulado + produto.preco * produto.quantidade,
        0
    );

    return (
        <div className="carrinho-container">
            <h1 className="carrinho-titulo">Meu Carrinho</h1>

            <div className="carrinho-lista">
                <div className="carrinho-cabecalho">
                    <span className="coluna-produto">Produto</span>
                    <span className="coluna-preco">Preço Unit.</span>
                    <span className="coluna-quantidade">Qtd.</span>
                    <span className="coluna-subtotal">Subtotal</span>
                </div>

                {produtosCarrinho.map((produto) => (
                    <ItemCarrinho
                        key={produto.id}
                        nome={produto.nome}
                        preco={produto.preco}
                        quantidade={produto.quantidade}
                    />
                ))}
            </div>

            <ResumoCompra produtos={produtosCarrinho} total={total} />
        </div>
    );
}

export default Carrinho