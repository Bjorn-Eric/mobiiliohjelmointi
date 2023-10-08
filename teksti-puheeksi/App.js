import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import * as Speech from "expo-speech";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  const onPress = () => {
    if (text !== "") {
      Speech.speak(text);
      return;
    }
    alert("Please enter some text to speak.");
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.header}>TEXT TO SPEECH</Text>
        <View style={styles.innerContainer}>
          <TextInput
            autoCorrect={false}
            onChangeText={(text) => setText(text)}
            placeholder="Enter text to speak"
            style={{
              height: 40,
              width: 300,
              borderColor: "gray",
              borderWidth: 1,
            }}
          />
          <View style={styles.buttonContainer}>
            <Button title="PRESS TO HEAR TEXT" onPress={onPress} />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  innerContainer: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 20,
  },
});
