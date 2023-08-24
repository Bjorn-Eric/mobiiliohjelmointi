import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Testi sovellus joka toimii!</Text>
      <FontAwesomeIcon icon={faHeart} style={styles.icon} size={50} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  icon: {
    color: '#fb0404',
    marginTop: 40,
  }
});
