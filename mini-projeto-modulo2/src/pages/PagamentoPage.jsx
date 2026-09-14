import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { pagamentoSchema } from "../schemas/pagamentoSchema"
import { usePagamento } from "../hooks/usePagamento"
import "../assets/styles/pagamento.css"
import { produtos } from "../data/produtos"
import ResumoCompra from "../components/ResumoCompra"


function Pagamento() {

    /* const navigate = useNavigate() */

    const { processarPagamento, processando } = usePagamento()

    const total = produtos.reduce(
        (soma, produto) => soma + produto.preco * produto.quantidade, 0
    )

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(pagamentoSchema),
        mode: "onBlur"
    })

    async function onSubmit(dados) {
        /* console.log("Formulário validado com sucesso:", dados)
        alert("Formulário válido! (Nenhum processamento foi feito ainda)") */

        await processarPagamento(dados)
    }

    return (

        <div className="pagamento-container">
            <section className="pagamento-formulario">
                <h1>Pagamento</h1>

                <form onSubmit={handleSubmit(onSubmit)} noValidate>  {/* noValidate serve para desativar a validação nativa do navegador  */}

                    <fieldset>
                        <legend>Dados do Cartão</legend>

                        {/* Campo Dados Titular */}
                        <div className="campo">
                            <label htmlFor="titular">Nome do Titular</label>
                            <input
                                id="titular"
                                type="text"
                                autoComplete="cc-name"
                                {...register("titular")}
                                aria-invalid={errors.titular ? "true" : "false"}
                                aria-describedby={errors.titular ? "erro-titular" : undefined}
                            />

                            {errors.titular && (
                                <p id="erro-titular" role="alert" className="erro">
                                    {errors.titular.message}
                                </p>
                            )}
                        </div>

                        {/* Campo Dados Cartão */}
                        <div className="campo">
                            <label htmlFor="numeroCartao">Número do Cartão</label>
                            <input
                                id="numeroCartao"
                                type="text"
                                inputMode="numeric" // Sugere o teclado numerico em dispositivos móveis
                                autoComplete="cc-number"
                                placeholder="0000 0000 0000 0000"
                                {...register("numeroCartao")}
                                aria-invalid={errors.numeroCartao ? "true" : "false"}
                                aria-describedby={errors.numeroCartao ? "erro-numeroCartao" : undefined}
                            />
                            {errors.numeroCartao && (
                                <p id="erro-numeroCartao" role="alert" className="erro">
                                    {errors.numeroCartao.message}
                                </p>
                            )}
                        </div>

                        {/* Campo Dados Validade */}
                        <div className="campo">
                            <label htmlFor="validade">Validade (MM/AA)</label>
                            <input
                                id="validade"
                                type="text"
                                inputMode="numeric"
                                autoComplete="cc-exp"
                                placeholder="MM/AA"
                                {...register("validade")}
                                aria-invalid={errors.validade ? "true" : "false"}
                                aria-describedby={errors.validade ? "erro-validade" : undefined}
                            />
                            {errors.validade && (
                                <p id="erro-validade" role="alert" className="erro">
                                    {errors.validade.message}
                                </p>
                            )}
                        </div>

                        {/* Campo Dados CVV */}
                        <div className="campo">
                            <label htmlFor="cvv">CVV</label>
                            <input
                                id="cvv"
                                type="text"
                                inputMode="numeric"
                                autoComplete="cc-csc"
                                placeholder="123"
                                {...register("cvv")}
                                aria-invalid={errors.cvv ? "true" : "false"}
                                aria-describedby={errors.cvv ? "erro-cvv" : undefined}
                            />
                            {errors.cvv && (
                                <p id="erro-cvv" role="alert" className="erro">
                                    {errors.cvv.message}
                                </p>
                            )}
                        </div>
                    </fieldset>

                    <button type="submit" disabled={isSubmitting}>
                        Confirmar Pagamento
                    </button>

                </form>

                {processando && (
                    <div className="modal-overlay" role="dialog" aria-modal="true">
                        <div className="modal-conteudo">
                            <div className="spinner"></div>
                            <p className="modal-mensagem">A COMPRA ESTÁ SENDO PROCESSADA</p>
                        </div>
                    </div>
                )}
            </section>

            {/* ALTERAÇÃO: Ocultando o botão "Finalizar Compra" na tela de pagamento */}
            <ResumoCompra
                produtos={produtos}
                total={total}
                exibirBotaoFinalizar={false}
            />
        </div>
    )
}

export default Pagamento