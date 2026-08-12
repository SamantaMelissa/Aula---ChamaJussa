import { StyleSheet, Platform } from 'react-native';

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

    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  inputGroup: {
    marginBottom: 16,
  },

  input: {
    backgroundColor: '#F4F5F7',
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === 'ios' ? 12 : 8,
    fontSize: 14,
    color: '#333',
  },

  inputLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  pickerContainer: {
    backgroundColor: '#F4F5F7',
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderRadius: 8,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
    paddingTop: 12,
  },
  imagePlaceholder: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagePlaceholderText: {
    color: '#A0A0A0',
    fontSize: 14,
    marginLeft: 8,
  },
  button: {
    width: '100%',
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