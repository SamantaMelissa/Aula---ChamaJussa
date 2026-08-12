import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    card: {
        backgroundColor: '#FFF',
        borderRadius: 14,
        padding: 16,
        marginBottom: 16,
        width: '100%',
        maxWidth: 450,
        flexDirection: 'row',
        alignItems: 'center',
        // Sombras
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
    },
    icon: {
        marginRight: 14,
        marginTop: 4,
    },
    contentContainer: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 6,
    },
    cardMessage: {
        fontSize: 14,
        color: '#666',
        lineHeight: 18,
        marginBottom: 12,
    },
    footerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardDate: {
        fontSize: 12,
        color: '#8E8E93',
    },
    cardTime: {
        fontSize: 12,
        color: '#8E8E93',
    },

})