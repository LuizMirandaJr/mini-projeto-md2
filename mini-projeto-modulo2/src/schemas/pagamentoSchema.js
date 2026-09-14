import { z } from "zod";

export const pagamentoSchema = z.object({
    titular: z
        .string()
        .trim()
        .min(1, "O nome do titular é obrigatório."),

    numeroCartao: z
        .string()
        .transform((valor) => valor.replace(/[\s-]/g, "")) // remove espaços e hífens
        .refine((valor) => /^\d{16}$/.test(valor), {
            message: "O número do cartão deve conter 16 dígitos.",
        }),

    validade: z
        .string()
        .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, // MM/AA - Valida o formato de Mês/Ano
            "A validade deve estar no formato MM/AA, com mês entre 01 e 12."
        ),

    cvv: z
        .string()
        .regex(/^\d{3}$/,
            "O CVV deve conter exatamente 3 dígitos."), // CVV - Exatamente 3 digitos numericos
});