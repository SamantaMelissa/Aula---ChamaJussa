import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./CardNotificao.style"
import { View, Text, ScrollView, TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function CardNotificacao() {
  return (
    <View style={styles.card}>
      <FontAwesome5 name="bullhorn" size={26} color="#7FD3ED" style={styles.icon} />

      <View style={styles.contentContainer}>
        <Text style={styles.cardTitle}>Ordem de Serviço finalizada</Text>
        <Text style={styles.cardMessage}>Sua OS foi finalizada, logo ela voltará para sua sala.</Text>

        <View style={styles.footerRow}>
          <Text style={styles.cardDate}>22/06/2026</Text>
          <Text style={styles.cardTime}>16:03</Text>
        </View>
      </View>
    </View>

  )
}