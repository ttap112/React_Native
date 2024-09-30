import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SingInScreen from './screen/SingInScreens';
import { WHITE } from './colors';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <SingInScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
});
