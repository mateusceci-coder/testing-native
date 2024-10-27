import { z } from "zod";

export const personalInformationSchema = z.object({
  nome: z.string().min(1, { message: "Nome é obrigatório" }),
  nomePreferencia: z.string().optional(),
  telefone: z
    .string()
    .regex(/^\+\d{2} \d{2} \d{5}-\d{4}$/, "Telefone inválido"),
  email: z.string().email("Email inválido"),
  endereco: z.string().optional(),
  contatoEmergencia: z.string().optional(),
  documento: z.string().optional(),
});
