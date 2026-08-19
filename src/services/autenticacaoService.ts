import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from './api';
import { LoginDTO, LoginResponseDTO } from '../@types';

// Chave padrão para persistência do token no armazenamento local
const TOKEN_KEY = '@chama_jussa:token';

export const autenticacaoService = {
  /**
   * Envia as credenciais para a API e salva o token localmente em caso de sucesso.
   */
  async login(dados: LoginDTO): Promise<LoginResponseDTO> {
    const { data } = await api.post<LoginResponseDTO>('Autenticacao/login', dados);

    // Persiste o token de autenticação se ele existir na resposta
    if (data?.token) {
      await AsyncStorage.setItem(TOKEN_KEY, data.token);
    }

    return data;
  },

  /**
   * Remove o token armazenado para encerrar a sessão do usuário.
   */
  async logout(): Promise<void> {
    await AsyncStorage.removeItem(TOKEN_KEY);
  },

  /**
   * Recupera o token salvo para uso em requisições autenticadas.
   */
  async getToken(): Promise<string | null> {
    return AsyncStorage.getItem(TOKEN_KEY);
  },
};