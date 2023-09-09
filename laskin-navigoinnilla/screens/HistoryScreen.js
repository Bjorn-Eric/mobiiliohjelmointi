import React from 'react';
import {FlatList, Text, View, TextInput, StyleSheet, Button} from "react-native";

export default function HistoryScreen({ route }) {
    const { calculationHistory } = route.params;
    console.log('Calculation history', calculationHistory);
    return(
        <View style={styles.container}>
            <View style={styles.historyContainer}>
                <FlatList
                    data={calculationHistory}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <Text style={styles.calculation}>{item.calculation}</Text>}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        padding: 20,
    },
    historyContainer: {
        flex: 1,
        paddingTop: 20,
        justifyContent: 'center',
        textAlign: 'center',
    },
    calculation: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
    }
});