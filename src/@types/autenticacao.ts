/**
 * DTO de credenciais para autenticação (POST /api/Autenticacao/login - LoginDto no Swagger)
 */
export interface LoginDTO {
  email: string;
  senha: string;
}

/**
 * DTO de resposta do login (TokenDto no Swagger)
 */
export interface LoginResponseDTO {
  token: string;
}