//LISTAGEM DE OS - para os cards E tela de detalhamento da OS
export interface OrdemServico{
    osId: number,
    nomeItem: string,
    solicitanteNome: string,
    dtCriacao: string,
    localizacaoNome: string,
    descricao: string,
    imagem?: string,
    statusNome: string,
    filaNome: string
}

//  {
//     "osId": 2,
//     "nomeItem": "teste",
//     "solicitante": "8c7b9660-e897-4935-9bb8-dbce3f2ad542",
//     "solicitanteNome": "samanta",
//     "dtCriacao": "2026-07-29T19:29:13.713",
//     "localizacaoId": 1,
//     "localizacaoNome": "Sala do Diretor (Andar: Térreo)",
//     "descricao": "teste",
//     "imagem": "/uploads/os-01c1acbb-b740-467a-ab2e-1eb9b13c91a8.png",
//     "statusId": 1,
//     "statusNome": "Aberto",
//     "filaId": 1,
//     "filaNome": "Geral"
//   }