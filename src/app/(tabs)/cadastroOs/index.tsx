import { ScrollView, View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./cadastroOs.styles";
import { Entypo, Feather, Ionicons } from "@expo/vector-icons";

export default function CadastroOs() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Título Principal */}
      <Text style={styles.headerTitle}>Criar Ordem de Serviço</Text>


      {/* Card Principal */}
      <View style={styles.card}>
        {/* Se você tentar aplicar um padding: 20 usando a propriedade style comum em um ScrollView, a barra de rolagem vai cortar visualmente ou o comportamento de scroll pode quebrar nas extremidades. */}
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
          <View>
            <Text>Título do problema *</Text>
            <TextInput></TextInput>
          </View>
          <View>
            <Text>Máquina / Equipamento *</Text>
            <TextInput></TextInput>
          </View>
          <View>
            <Text>Local / Setor *</Text>
            <TextInput></TextInput>
          </View>
          <View>
            <Text>Descrição do problema *</Text>
            <TextInput></TextInput>
          </View>
          <View>
            <Text>Imagem / Foto do problema  *</Text>
            <TextInput></TextInput>
          </View>
          {/* Botão de Ação */}
          <TouchableOpacity style={styles.button} activeOpacity={0.7}>
            <Text style={styles.buttonText}>Abrir Ordem de Serviço</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>



    </SafeAreaView>
  )
}