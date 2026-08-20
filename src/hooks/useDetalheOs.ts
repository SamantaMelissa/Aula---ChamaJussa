import { useEffect, useState } from "react";
import { OrdemServico } from "../@types";
import { ordemServicoService } from "../services/ordemServicoService";

export function useDetalheOS(id: string){
    //estados(useState), funções que chamam as func que fazem as requisicoes, useEffect
    const[os, setOs] = useState<OrdemServico | null>(null);

    async function carregarOs(){
        try {
            const dados = await ordemServicoService.buscarPorId(id);
            setOs(dados)
        } catch (error) {
            console.log("Não foi possível carregar os detalhes da ordem de serviço.")
        }
    }

    useEffect(() => {
        carregarOs();
    },[])


    return os;
}