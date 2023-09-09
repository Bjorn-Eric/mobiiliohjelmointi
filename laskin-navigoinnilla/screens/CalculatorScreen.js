import React from "react";
import {Button, FlatList, Text, TextInput, View, StyleSheet} from "react-native";
import {useState} from "react";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export default function CalculatorScreen({navigation}) {
    const [resultText, setResultText] = useState("");
    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [calculationHistory, setCalculationHistory] = useState([]);

    const onCalculatePress = (operator) => {
        if (firstNumber === "" || secondNumber === "") {
            alert("Syötä molemmat numerot!");
            return;
        }

        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);
        let result;
        if (operator === "+") {
            result = num1 + num2;
        } else {
            result = num1 - num2;
        }

        setResultText(result.toString());
        const calculation = `${num1} ${operator} ${num2} = ${result}`;
        setCalculationHistory([{ id: uuidv4(), calculation }, ...calculationHistory]);
    }

    const onHistoryPress = () => {
        navigation.navigate("History", { calculationHistory });
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.answerText}>Vastaus: {resultText}</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={setFirstNumber}
                    keyboardType='numeric'
                    value={firstNumber}
                    placeholder="Syötä numero"
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={setSecondNumber}
                    keyboardType='numeric'
                    value={secondNumber}
                    placeholder="Syötä numero"
                />
                <View style={styles.buttonContainer}>
                    <Button title="+" onPress={() => onCalculatePress("+")} />
                    <Button title="-" onPress={() => onCalculatePress("-")} />
                </View>
                <Button title="Historia" onPress={onHistoryPress} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        borderBottomWidth: 1,
        marginVertical: 15,
        paddingVertical: 5,
        width: 200,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 200,
        marginVertical: 20,
    },
    answerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    calculation: {
        fontSize: 16,
        marginBottom: 10,
    }
});