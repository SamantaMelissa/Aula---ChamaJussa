import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F4F5F7',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    paddingVertical: 32,
    paddingHorizontal: 20,
    width: '100%',
    maxWidth: 450,
    alignItems: 'center',
    marginBottom: 24,
    // Sombras leves
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#E0E0E0',
    marginBottom: 20,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 6,
  },
  userEmail: {
    fontSize: 15,
    color: '#7C7C7C',
  },
  logoutButton: {
    backgroundColor: '#F84B4B', // Vermelho correspondente ao protótipo
    borderRadius: 10,
    paddingVertical: 14,
    width: '100%',
    maxWidth: 450,
    alignItems: 'center',
    shadowColor: '#F84B4B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  logoutButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNav: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navLabel: {
    fontSize: 11,
    color: '#666',
    marginTop: 4,
  },
  navLabelActive: {
    color: '#00A86B',
    fontWeight: 'bold',
  },
});