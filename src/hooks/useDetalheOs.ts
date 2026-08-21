import { useEffect, useState } from "react";
import { OrdemServico } from "../@types";
import { ordemServicoService } from "../services/ordemServicoService";

export function useDetalheOS(id: string) {
    //estados(useState), funções que chamam as func que fazem as requisicoes, useEffect
    const [os, setOs] = useState<OrdemServico | null>(null);

    async function carregarOs() {
        try {
            const dados = await ordemServicoService.buscarPorId(id);
            setOs(dados)
        } catch (error) {
            console.log("Não foi possível carregar os detalhes da ordem de serviço.")
        }
    }

    useEffect(() => {
        carregarOs();
    }, [])

    const formatarData = (dataStr?: string) => {
        if (!dataStr) return '';
        try {
            const data = new Date(dataStr);
            return isNaN(data.getTime()) ? dataStr : data.toLocaleString('pt-BR');
        } catch {
            return dataStr;
        }
    };


    const osIdentificador = os?.osId
        ? `OS-${String(os.osId).padStart(3, '0')}`
        : id
            ? `OS-${String(id).padStart(3, '0')}`
            : 'OS';

    return {
        os,
        dataFormatada: formatarData(os?.dtCriacao),
        osIdentificador
    };
}