import { CriarOrdemServicoDTO, OrdemServico } from "../@types";
import api from "./api";
import { Platform } from "react-native";

export const ordemServicoService = {
    // GET: Lista todas as ordens de serviço
    async listar(): Promise<OrdemServico[]> {
        const resposta = await api.get<OrdemServico[]>('OrdemServico');
        return resposta.data;
    },

    // POST: Cadastra uma nova ordem de serviço
    async criar(dados: CriarOrdemServicoDTO): Promise<OrdemServico> {
        const formData = new FormData();
        formData.append('NomeItem', dados.nomeItem);
        formData.append('LocalizacaoId', String(dados.localizacaoId));
        formData.append('Descricao', dados.descricao);

        if (dados.imagem && dados.imagem.uri) {
            const uri = dados.imagem.uri;
            const filename = dados.imagem.name || uri.split('/').pop() || `foto_${Date.now()}.jpg`;
            const match = /\.(\w+)$/.exec(filename);
            const mimeType = dados.imagem.mimeType || (match ? `image/${match[1].toLowerCase()}` : 'image/jpeg');

            if (Platform.OS === 'web') {
                const response = await fetch(uri);
                const blob = await response.blob();
                formData.append('Imagem', blob, filename);
            } else {
                formData.append('Imagem', {
                    uri,
                    name: filename,
                    type: mimeType,
                } as any);
            }
        }

        const resposta = await api.post<OrdemServico>('OrdemServico', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return resposta.data;
    },
    // GET: Busca uma ordem de serviço por ID (/api/OrdemServico/{id})
    async buscarPorId(id: number | string): Promise<OrdemServico> {
        const resposta = await api.get<OrdemServico>(`OrdemServico/${id}`);
        return resposta.data;
    },
};

export default ordemServicoService;
