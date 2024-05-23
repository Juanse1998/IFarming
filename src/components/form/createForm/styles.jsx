import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 130,
    alignItems: 'center'
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width: Platform.OS === 'web' ? 300 : '80%',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333333',
  },
  input: {
    backgroundColor: '#ffffff',
    padding: 10,
    width: '100%',
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 10,
    backgroundColor: '#037DAA',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modal: {
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#333333',
  },
  modalButton: {
    backgroundColor: '#037DAA',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});