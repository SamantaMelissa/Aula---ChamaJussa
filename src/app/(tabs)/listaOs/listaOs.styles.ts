import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/theme";

export const styles = StyleSheet.create({
    safearea: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingHorizontal: 30
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
        paddingHorizontal: 20,
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
  

})