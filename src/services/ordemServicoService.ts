import { OrdemServico } from "../@types";
import { api } from "./api";

export const ordemServicoService = {
    async listar() : Promise<OrdemServico[]>{
        //requisicao:
        //Obs. se estamos trabalhando com lista não esqueça do [] array
        const resposta = await api.get<OrdemServico[]>("OrdemServico");

        return resposta.data;
    }

}