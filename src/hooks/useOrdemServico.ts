// src/hooks/useOrdensServico.ts
import { useState, useEffect } from 'react';
import { CriarOrdemServicoDTO, OrdemServico } from '../@types';
import { ordemServicoService } from '../services/ordemServicoService';

export function useOrdemServico() {
  // 1. Estados para guardar os dados, carregamento e erros
  const [ordens, setOrdens] = useState<OrdemServico[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 2. Função simples para buscar os dados na API
  async function carregarOrdens() {
    try {
      setLoading(true);
      setError(null);

      const dados = await ordemServicoService.listar();
      setOrdens(dados);
    } catch (err: any) {
      setError('Não foi possível carregar as ordens de serviço.');
    } finally {
      setLoading(false);
    }
  }

  // 3. Função para cadastrar uma nova ordem de serviço
  async function criarOrdem(dados: CriarOrdemServicoDTO) {
    try {
      const novaOs = await ordemServicoService.criar(dados);
      setOrdens((anteriores) => [novaOs, ...anteriores]);
      return novaOs;
    } catch (err: any) {
      throw err;
    }
  }

  // 4. useEffect executa a função ao carregar a tela pela primeira vez
  useEffect(() => {
    carregarOrdens();
  }, []);

  // 5. Devolve tudo o que a tela precisa para exibir os dados
  return {
    ordens,
    loading,
    error,
    recarregar: carregarOrdens,
    criarOrdem,
  };
}

export default useOrdemServico;