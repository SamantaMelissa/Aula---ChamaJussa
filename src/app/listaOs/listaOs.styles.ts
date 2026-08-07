import { StyleSheet } from "react-native";
import { Colors } from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        // backgroundColor: "red",
        flex: 1,
        padding: 30


    },
    superior: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 16,
    },
    titulo: {
        fontSize: 14,
        color: "#4B5563",
    },
    titulo_lista: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    btn_nova_os: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        backgroundColor: Colors.colorBtnBlue,
        // gap: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    btn_text: {
        color: '#FFF',
        fontWeight: '600',
        fontSize: 14,
    },
    filtros: {
        flexDirection: 'row',
        // paddingHorizontal: 20,
        marginBottom: 16,
        gap: 8,
        flexWrap: 'wrap',
    },
    filterbtn: {
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        backgroundColor: Colors.colorBtnBlue,
        borderColor: Colors.inputBg,

    },
    filterbtntxt: {
        color: Colors.inputBg
    },
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,

        paddingHorizontal: 22,
        paddingVertical: 22,

        marginBottom: 18,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.16,
        shadowRadius: 5,

        elevation: 5,
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