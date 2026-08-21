import { useEffect, useState } from "react";
import { OrdemServico } from "../@types";
import { ordemServicoService } from "../services/ordemServicoService";
import { Alert } from "react-native";

export function useOrdemServico() {
    const [os, setOs] = useState<OrdemServico[]>([]);

    async function listarOs() {
        try {
            const dados = await ordemServicoService.listar();
            setOs(dados);
        } catch (error) {
            Alert.alert("Errisssiimooo!", "Listagem deu ruim 😥")
        }
    }

    useEffect(() => {
        listarOs();
    }, [])


    return os;
}