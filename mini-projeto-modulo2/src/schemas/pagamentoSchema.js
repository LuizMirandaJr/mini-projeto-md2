import { z } from "zod";


export const pagamentoSchema = z.object({
    titular: z
        .string()
        .trim()
        .min(1, "O nome do titular é obrigatório."),

    numeroCartao: z
        .string()
        .transform((valor) => valor.replace(/[\s-]/g, ""))
        .refine((valor) => /^\d{16}$/.test(valor), {
            message: "O número do cartão deve conter 16 dígitos.",
        }),


    validade: z
        .string()
        .regex(
            /^(0[1-9]|1[0-2])\/\d{2}$/,
            "A validade deve estar no formato MM/AA, com mês entre 01 e 12."
        )
        // .refine é usado para criar validações personalizadas no ZOD. Regras que não são cobertas pelos validadores prontos
        .refine(
            (valor) => {

                const [mesTexto, anoTexto] = valor.split("/");

                const mesDigitado = Number(mesTexto); // Converte o ano de 2 dígitos para 4 dígitos, assumindo o século 2000.

                const anoDigitado = 2000 + Number(anoTexto);


                const hoje = new Date(); // Pega a data atual do sistema
                const mesAtual = hoje.getMonth() + 1; // getMonth() é 0-indexado (0 = janeiro)
                const anoAtual = hoje.getFullYear();

                if (anoDigitado > anoAtual) return true; // Se o ano digitado for maior que o atual => OK
                if (anoDigitado === anoAtual && mesDigitado >= mesAtual) return true; // Se o ano digitado for IGUAL ao atual E o mês digitado for MAIOR OU IGUAL ao mês atual => OK

                return false; // Se a data for menor que a atual => Mensagem "O cartão esta vencido"
            },
            {
                message: "O cartão está vencido.",
            }
        ),

    cvv: z
        .string()
        .regex(/^\d{3}$/, "O CVV deve conter exatamente 3 dígitos."),
});