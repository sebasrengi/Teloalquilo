import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { taskpage } from './src/pages/taskpage';
import { NotFoundPage } from './src/pages/NotFoundPage';
import { Navigation } from './src/pages/Navigation';
import { Hero } from './src/pages/Hero';
import "./global.css"

export default function App() {
  return (
   
    <View style={styles.container}>
      <Navigation />
      <Hero />
      <Text>Hola Mundo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    
  },
});
