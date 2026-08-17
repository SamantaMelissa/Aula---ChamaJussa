import { OrdemServico } from "../@types";
import api from "./api";

export const ordemServicoService = {
    // GET: Lista todas as ordens de serviço
    async listar(): Promise<OrdemServico[]> {
        const resposta = await api.get<OrdemServico[]>('/api/OrdemServico');
        return resposta.data;
    },
}

export default ordemServicoService;