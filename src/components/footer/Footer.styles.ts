import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',            // Alinha os itens lado a lado em linha
    justifyContent: 'space-around', // Distribui o espaço por igual entre os ícones
    alignItems: 'center',            // Centraliza os ícones verticalmente
    backgroundColor: '#FFFFFF',
    height: 65,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',      // Linha sutil separando o menu do conteúdo
    paddingBottom: 5,               // Afasta do rodapé da tela
  },
  tabItem: {
    alignItems: 'center',            // Centraliza o texto logo abaixo do ícone
    justifyContent: 'center',
    gap: 4,                         // Espaço entre o ícone e o texto
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6B7280',               // Cor padrão para itens inativos (Cinza)
  },
  labelActive: {
    color: '#0085B2',               // Cor de destaque para o item selecionado (Azul)
    fontWeight: '600',
  },
});