import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F4F5F7',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
        marginBottom: 20,
    },
    scrollView: {
        width: '100%',
    },
    scrollContent: {
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20,
    }
})