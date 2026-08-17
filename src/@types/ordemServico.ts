export interface OrdemServico {
  osId: number;
  nomeItem: string;
  solicitante: string; // UUID do usuário solicitante
  solicitanteNome: string;
  dtCriacao: string;
  localizacaoId: number;
  localizacaoNome: string;
  descricao: string;
  imagem?: string;
  statusId: number;
  statusNome: string;
  filaId: number;
  filaNome: string;
}
