import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [guess, setGuess] = useState(null);
  const [guessCount, setGuessCount] = useState(0);
  const [guessResult, setGuessResult] = useState('');

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  }, []);

  const onMakeGuessPress = () => {
    setGuessCount((prevState) => prevState + 1);

    if (guess === null) {
      Alert.alert('Please enter a number!');
      return;
    }

    if (parseFloat(guess) === parseFloat(randomNumber)) {
      Alert.alert(`You guessed the number in ${guessCount} guesses`);
      setGuessCount(0);
      setGuess(null);
      setRandomNumber(Math.floor(Math.random() * 100) + 1);
      setGuessResult('');
    } else {
      setGuessResult(guess > randomNumber ? `Your guess ${guess} is too high` : `Your guess ${guess} is too low`);
    }
  }

  return (
      <View style={styles.container}>
        {guessResult === '' && <Text>Guess a number between 1-100</Text>}
        {guessResult !== '' && <Text>{guessResult}</Text>}
        <TextInput
            style={styles.textInput}
            onChangeText={setGuess}
            value={guess}
            keyboardType={'numeric'}
            placeholder={'Guess a number'}
            maxLength={3}
        />
        <View style={styles.buttonContainer}>
          <Button title="MAKE GUESS" onPress={onMakeGuessPress} />
        </View>
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
  textInput: {
    borderWidth: 1,
    width: 200,
    height: 45,
    textAlign: 'center',
    marginTop: 20
  },
  buttonContainer: {
    marginTop: 30,
  }
});
