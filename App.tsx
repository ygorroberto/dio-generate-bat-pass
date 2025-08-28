import { StyleSheet, View, Text } from 'react-native';
import Home from './src/screens/Home/Home';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <View style={styles.container}>
      <Toast />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
