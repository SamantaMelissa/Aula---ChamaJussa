import { ActivityIndicator, FlatList, Pressable, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./listaOs.styles"
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../../../components/footer/Footer";
import CardOs from "../../../components/cardOs";
import useOrdemServico from "../../../hooks/useOrdemServico";
import { OrdemServico } from "../../../@types";

const ordens = [
  {
    id: "1",
    numero: "OS-001",
    status: "Aberta",
    titulo: "Vazamento hidráulico no Bloco B",
    descricao:
      "Há um vazamento constante de água por baixo da pia do banheiro masculino do segundo andar...",
  },
  {
    id: "2",
    numero: "OS-002",
    status: "Em Andamento",
    titulo: "Computador sem internet",
    descricao:
      "O computador do laboratório 4 não está conseguindo acessar a internet.",
  },
  {
    id: "3",
    numero: "OS-003",
    status: "Concluída",
    titulo: "Projetor queimado",
    descricao:
      "Foi realizada a troca da lâmpada do projetor.",
  },
  {
    id: "4",
    numero: "OS-003",
    status: "Concluída",
    titulo: "Projetor queimado",
    descricao:
      "Foi realizada a troca da lâmpada do projetor.",
  },
  {
    id: "5",
    numero: "OS-003",
    status: "Concluída",
    titulo: "Projetor queimado",
    descricao:
      "Foi realizada a troca da lâmpada do projetor.",
  },
  {
    id: "6",
    numero: "OS-003",
    status: "Concluída",
    titulo: "Projetor queimado",
    descricao:
      "Foi realizada a troca da lâmpada do projetor.",
  },
  {
    id: "7",
    numero: "OS-003",
    status: "Concluída",
    titulo: "Projetor queimado",
    descricao:
      "Foi realizada a troca da lâmpada do projetor.",
  },
  {
    id: "8",
    numero: "OS-003",
    status: "Concluída",
    titulo: "Projetor queimado",
    descricao:
      "Foi realizada a troca da lâmpada do projetor.",
  },
];

// export const ListaOs = () => {
export default function ListaOs() {

  // Hook que encapsula a chamada à API, loading e tratamento de erros
  const { ordens, loading, error, recarregar } = useOrdemServico();

  return (
    <SafeAreaView style={styles.safearea} edges={['top', 'left', 'right']}>
      <View style={styles.container}>
        <View style={styles.superior}>
          <View>
            <Text style={styles.titulo}>Olá, Késsia</Text>
            <Text style={styles.titulo_lista}>Minhas OSs</Text>
          </View>
          {/* Use o TouchableOpacity para protótipos rápidos e botões simples onde o efeito padrão de transparência já atende bem.
    Use o Pressable para criar sistemas de design robustos, botões com feedback de cor customizado e componentes que precisam de respostas ao toque mais complexas. */}
          <TouchableOpacity style={styles.btn_nova_os}>
            <Text style={styles.btn_text}>Nova OS</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.filtros}>
          <Pressable style={styles.filterbtn}>
            <Text style={styles.filterbtntxt}>Todos</Text>
          </Pressable>
          <Pressable style={styles.filterbtn}>
            <Text style={styles.filterbtntxt}>Aberto</Text>
          </Pressable>
          <Pressable style={styles.filterbtn}>
            <Text style={styles.filterbtntxt}>Em Andamento</Text>
          </Pressable>
          <Pressable style={styles.filterbtn}>
            <Text style={styles.filterbtntxt}>Concluídas</Text>
          </Pressable>
        </View>
        {/* Estado de Carregamento (Loading) */}
        {loading && ordens.length === 0 ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#0878F9" />
            <Text style={{ marginTop: 12, color: '#6B7280' }}>Carregando ordens de serviço...</Text>
          </View>
        ) : error && ordens.length === 0 ? (
          /* Estado de Erro */
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Text style={{ fontSize: 16, color: '#DC2626', textAlign: 'center', marginBottom: 16 }}>
              {error}
            </Text>
            <TouchableOpacity
              style={[styles.btn_nova_os, { backgroundColor: '#0878F9' }]}
              onPress={() => recarregar()}
            >
              <Text style={styles.btn_text}>Tentar novamente</Text>
            </TouchableOpacity>
          </View>
        ) : (
          /* Exibição em FlatList com Pull-to-Refresh */
          <FlatList
            data={ordens}
            keyExtractor={(item: OrdemServico) => String(item.osId || Math.random())}
            showsVerticalScrollIndicator={false}
            refreshing={loading}
            onRefresh={() => recarregar()}
            ListEmptyComponent={
              <View style={{ alignItems: 'center', marginTop: 40 }}>
                <Text style={{ color: '#9CA3AF', fontSize: 16 }}>
                  Nenhuma ordem de serviço encontrada.
                </Text>
              </View>
            }
            renderItem={({ item }) => (
              //card:
              <CardOs
                numOs={item.osId}
                status={item.statusNome}
                titulo={item.nomeItem}
                descricao={item.descricao} />
            )}
          />
        )}
      </View>
      {/* <Footer /> */}
    </SafeAreaView>
  )
}
