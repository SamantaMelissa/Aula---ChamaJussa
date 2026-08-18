import { useState, useEffect } from 'react';
import { Localizacao } from '../@types';
import { localizacaoService } from '../services/localizacaoService';

export function useLocalizacao() {
  const [locais, setLocais] = useState<Localizacao[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function carregarLocais() {
    try {
      setLoading(true);
      setError(null);

      const dados = await localizacaoService.listar();
      setLocais(dados);
    } catch (err: any) {
      console.error('Erro ao carregar locais:', err);
      setError('Não foi possível carregar a lista de locais.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarLocais();
  }, []);

  return {
    locais,
    loading,
    error,
    recarregar: carregarLocais,
  };
}

export default useLocalizacao;
