import React, { useState } from "react";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [shoppingItems, setShoppingItems] = useState([]);
  const [enteredItem, setEnteredItem] = useState('');

  const onAddItemHandler = () => {

    if(enteredItem.length === 0) {
      alert('Please enter an item to add to the list');
      return;
    }

    setShoppingItems((prevState) => {
      return [...prevState, {id: uuidv4(), text: enteredItem}]
    })
  }

  const onClearItemsHandler = () => {
    setShoppingItems([]);
    setEnteredItem('');
  }

  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.headingText}>Ostoslista</Text>
        <TextInput
            autoComplete={false}
            style={styles.input}
            onChangeText={text => setEnteredItem(text)}
            value={enteredItem}
            placeholder="Enter item..."
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonSpacing}><Button onPress={onAddItemHandler} title="ADD" /></View>
          <View style={styles.buttonSpacing}><Button onPress={onClearItemsHandler} title="CLEAR" /></View>
        </View>
        <Text style={styles.subheadingText}>Shopping list</Text>
        <FlatList
            style={styles.listStyle}
            data={shoppingItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <Text style={styles.listItemText}>{item.text}</Text>}
        />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'center',
  },
  input: {
    width: '90%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  buttonSpacing: {
    marginHorizontal: 8,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subheadingText: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    color: 'blue'
  },
  listStyle: {
    width: '95%',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  listItemText: {
    fontSize: 16,
    marginVertical: 5,
  }
});
