import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'column',
    borderColor: '#e5bf3c',
    borderWidth: 2,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#4d4d4d'
  },
  input: {
    marginTop: 40,
    backgroundColor: '#e5bf3c',
    color: '#000',
    borderRadius: 5,
    width: '90%',
    fontSize: 20,
    height: 60,
    padding: 10,
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    width: '90%',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: '#000',
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: .25,
    color: '#e5bf3c',
  }
});

export default styles;