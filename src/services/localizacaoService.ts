import { Localizacao } from "../@types";
import api from "./api";

export const localizacaoService = {
  // GET: Lista todos os locais da API (/api/Local)
  async listar(): Promise<Localizacao[]> {
    const resposta = await api.get<Localizacao[]>('Local');
    return resposta.data;
  },
};

export default localizacaoService;
