import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./perfil.styles"

export default function Perfil() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Título Principal */}
        <Text style={styles.headerTitle}>Perfil</Text>

        {/* Card de Informações do Usuário */}
        <View style={styles.card}>
          <Image
            source={require("../../../../assets/imgs/usuario.png")} // Substitua pela foto de perfil real
            style={styles.avatar}
          />
          <Text style={styles.userName}>Késsia Milena</Text>
          <Text style={styles.userEmail}>kessia@emai.com</Text>
        </View>

        {/* Botão de Sair da Conta */}
        <TouchableOpacity
          style={styles.logoutButton}
          activeOpacity={0.8}
        >
          <Text style={styles.logoutButtonText}>Sair da Conta</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}