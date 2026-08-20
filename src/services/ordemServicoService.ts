import { OrdemServico } from "../@types";
import { api } from "./api";

export const ordemServicoService = {
    async listar() : Promise<OrdemServico[]>{
        //requisicao:
        //Obs. se estamos trabalhando com lista não esqueça do [] array
        const resposta = await api.get<OrdemServico[]>("OrdemServico");

        return resposta.data;
    },
    // | - Cria um Union type
     // GET: Busca uma ordem de serviço por ID (/api/OrdemServico/{id})
    async buscarPorId(id: number | string): Promise<OrdemServico> {
        const resposta = await api.get<OrdemServico>(`OrdemServico/${id}`);
        return resposta.data;
    },

}