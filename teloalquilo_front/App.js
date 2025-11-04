import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { taskpage } from './src/pages/taskpage';
import { NotFoundPage } from './src/pages/NotFoundPage';
import { Navigation } from './src/pages/Navigation';
import "./global.css"

export default function App() {
  return (
   
    <View style={styles.container}>
      <Navigation />
      <Text>Hola Mundo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column',
    
    
  },
});
