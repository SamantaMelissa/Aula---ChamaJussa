import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,

        paddingHorizontal: 22,
        paddingVertical: 22,

        marginBottom: 18,

        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 4,
        // },
        // shadowOpacity: 0.16,
        // shadowRadius: 5,

        // elevation: 5,
                // --- LÓGICA DA SOMBRA ---

        // 1. Para o Android (Usa um sistema baseado em níveis de elevação)
        elevation: 4,

        // 2. Para o iOS (Permite controle fino como no CSS web)
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
        shadowOpacity: 0.1,                   // Opacidade/Intensidade
        shadowRadius: 8,                      // Nível de desfoque (blur)
    },

    cardPressed: {
        opacity: 0.8,
        transform: [{ scale: 0.99 }],
    },

    cardTopo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 22,
    },

    numero: {
        color: "#0878F9",
        fontSize: 21,
        fontWeight: "700",
    },

    statusContainer: {
        backgroundColor: "#DCEBFF",
        paddingHorizontal: 18,
        paddingVertical: 7,
        borderRadius: 14,
    },

    status: {
        color: "#2F80ED",
        fontSize: 16,
        fontWeight: "500",
    },

    tituloCard: {
        color: "#111111",
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 10,
    },

    descricao: {
        color: "#737373",
        fontSize: 17,
        lineHeight: 23,
    },
})