import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./notificacoes.style"
import { Text, ScrollView } from "react-native";
import CardNotificacao from "../../../components/cardNotificacao/CardNotificacao";

export default function Notificacoes() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.headerTitle}>Notificações</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        style={styles.scrollView}>
        <CardNotificacao/>
        <CardNotificacao/>
        <CardNotificacao/>
        <CardNotificacao/>
        <CardNotificacao/>
        <CardNotificacao/>
        <CardNotificacao/>
      </ScrollView>
    </SafeAreaView>
  )
}