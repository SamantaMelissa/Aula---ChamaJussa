import { Pressable, View, Text } from "react-native";
import { styles } from "./CardOs.style";
import { useRouter } from "expo-router";

interface OrdemDeServico {
    numOs: number;
    status: string;
    titulo: string;
    descricao: string;
    onPress?: () => void;
}

export default function CardOs({ numOs, status, titulo, descricao, onPress }: OrdemDeServico) {
    const router = useRouter();
    const identificador = `OS-${String(numOs).padStart(3, '0')}`;

    const handlePress = () => {
        if (onPress) {
            onPress();
        } else {
            router.push(`/detalhesOs/${numOs}`);
        }
    };

    return (
        <Pressable
            onPress={handlePress}
            style={({ pressed }) => [
                styles.card,
                pressed && styles.cardPressed,
            ]}
        >
            <View style={styles.cardTopo}>
                <Text style={styles.numero}>{identificador} </Text>

                <View style={styles.statusContainer}>
                    <Text style={styles.status}>{status}</Text>
                </View>
            </View>

            <Text style={styles.tituloCard}>{titulo}</Text>

            <Text style={styles.descricao} numberOfLines={3}>
                {descricao}
            </Text>
        </Pressable>
    );
}