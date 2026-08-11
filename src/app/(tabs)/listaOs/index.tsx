import { FlatList, Pressable, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./listaOs.styles"
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../../../components/footer/Footer";

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
  return (
      <SafeAreaView style={styles.safearea}>
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
          <FlatList
            data={ordens}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              //card:
              <Pressable
                style={({ pressed }) => [
                  styles.card,
                  pressed && styles.cardPressed,
                ]}
              >
                <View style={styles.cardTopo}>
                  <Text style={styles.numero}>{item.numero}</Text>

                  <View style={styles.statusContainer}>
                    <Text style={styles.status}>{item.status}</Text>
                  </View>
                </View>

                <Text style={styles.tituloCard}>{item.titulo}</Text>

                <Text style={styles.descricao} numberOfLines={3}>
                  {item.descricao}
                </Text>
              </Pressable>
            )}
          />
        </View>
        {/* <Footer /> */}
      </SafeAreaView>
  )
}
