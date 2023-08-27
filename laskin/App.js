import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

export default function App() {

    //TODO: Create a unified state. Do not use multiple states for each number.
    const [resultText, setResultText] = useState("");
    const [firstNumber, setFirstNumber] = useState(null);
    const [secondNumber, setSecondNumber] = useState(null);

    const onCalculatePress = (operator) => {
        if(firstNumber === null || secondNumber === null) {
            alert("Syötä molemmat numerot!");
            return;
        }

        if(operator === "+") {
            setResultText(parseFloat(firstNumber) + parseFloat(secondNumber));
        }else {
            setResultText(parseFloat(firstNumber) - parseFloat(secondNumber));
        }
    }

    const onClearPress = () => {
        setResultText("");
        setFirstNumber(null);
        setSecondNumber(null);
    }

  return (
    <View style={styles.container}>
      <Text style={styles.answerText}>Vastaus: {resultText}</Text>
        <TextInput
            style={styles.textInput}
            onChangeText={setFirstNumber}
            keyboardType='number-pad'
            value={firstNumber}
            placeholder="Syötä numero"
        />
        <TextInput
            style={styles.textInput}
            onChangeText={setSecondNumber}
            value={secondNumber}
            keyboardType='number-pad'
            placeholder="Syötä nsumero"
        />
      <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="+" onPress={() => onCalculatePress("+")}/>
          </View>
          <View style={styles.button}>
            <Button title="-" onPress={ ()=> onCalculatePress("-")}/>
          </View>
      </View>
      <Button title={"Tyhjennä"} onPress={onClearPress}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  textInput: {
    borderBottomWidth: 1,
    margin: 10,
    borderBottomColor: 'grey',
    width: 200,
    height: 35,
  },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: 200,
        marginVertical: 20,
    },
    button: {
        width: 70,
        height: 40,
    },
    answerText: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});
