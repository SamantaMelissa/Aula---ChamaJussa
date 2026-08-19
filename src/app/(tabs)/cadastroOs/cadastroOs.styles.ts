import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F4F5F7',
    // adicionado:
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    // adicionado:
    color: '#1A1A1A',
    marginVertical: 16,
  },
  card: {
    backgroundColor: '#FFF',
    // adicionado:
    borderRadius: 16,
    marginBottom: 20,
    width: '90%',
    maxWidth: 450,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    // adicionado:
    shadowOpacity: 0.08,
    shadowRadius: 8,
    // adicionado:
    elevation: 3,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  // adicionado:
  scrollContent: {
    paddingBottom: 20,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: Platform.OS === 'ios' ? 14 : 10,
    fontSize: 15,
    color: '#1A202C',
  },
  pickerContainer: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 10,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  picker: {
    height: 52,
    width: '100%',
    color: '#1A202C',
  },
  textArea: {
    height: 110,
    textAlignVertical: 'top',
    paddingTop: 12,
  },
  imagePickerButton: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1.5,
    borderColor: '#CBD5E1',
    borderStyle: 'dashed',
    borderRadius: 10,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  imagePlaceholderText: {
    color: '#475569',
    fontSize: 14,
    fontWeight: '500',
  },
  imagePlaceholderSubtext: {
    color: '#94A3B8',
    fontSize: 12,
  },
  imagePreviewContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    backgroundColor: '#000',
    position: 'relative',
  },
  imagePreview: {
    width: '100%',
    height: 180,
    borderRadius: 8,
  },
  imageActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#F8FAFC',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  imageActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: '#EDF2F7',
  },
  imageActionText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#4A5568',
  },
  imageRemoveButton: {
    backgroundColor: '#FEE2E2',
  },
  imageRemoveText: {
    color: '#DC2626',
  },
  button: {
    width: '100%',
    backgroundColor: '#0878F9',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    shadowColor: '#0878F9',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 3,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
