import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F4F5F7',
    alignItems: 'center'
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    marginBottom: 20,
    width: '90%',
    maxWidth: 450,
    height: '80%',
    // maxHeight: 500,

    // alignItems: "center",

    // Sombra para iOS e Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  date: {
    fontSize: 13,
    color: '#7C7C7C',
    marginTop: 4,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    marginRight: 12,
    marginTop: 2,
  },
  label: {
    fontSize: 12,
    color: '#7C7C7C',
    marginBottom: 2,
  },
  value: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1A1A1A',
    paddingRight: 20,
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E5E5',
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 14,
    color: '#4A4A4A',
    lineHeight: 20,
    marginBottom: 20,
  },
  problemImage: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    backgroundColor: '#E0E0E0',
  },
  button: {
    width: '90%',
    maxWidth: 450,


    borderWidth: 1.5,
    borderColor: '#0066FF',
    backgroundColor: '#EEF4FF',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#0066FF',
    fontSize: 16,
    fontWeight: 'bold',
  }
});