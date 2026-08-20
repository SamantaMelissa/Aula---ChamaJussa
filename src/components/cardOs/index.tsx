import { Pressable, View, Text } from "react-native";
import {styles} from "./CardOs.style"
import { useRouter } from "expo-router";

interface OrdemDeServico{
    numOs: number,
    status: string,
    titulo: string, 
    descricao: string
}

export default function CardOs({numOs, status, titulo, descricao} : OrdemDeServico) {
    const router = useRouter();

    function direcionarDetalheOs(){
        router.push("/detalhesOs/"+ numOs)
    }

    return (
        <Pressable
            onPress={direcionarDetalheOs}
            style={({ pressed }) => [
                styles.card,
                pressed && styles.cardPressed,
            ]}
        >
            <View style={styles.cardTopo}>
                <Text style={styles.numero}>{numOs}</Text>

                <View style={styles.statusContainer}>
                    <Text style={styles.status}>{status}</Text>
                </View>
            </View>

            <Text style={styles.tituloCard}>{titulo}</Text>

            <Text style={styles.descricao} numberOfLines={3}>
                {descricao}
            </Text>
        </Pressable>
    )
}