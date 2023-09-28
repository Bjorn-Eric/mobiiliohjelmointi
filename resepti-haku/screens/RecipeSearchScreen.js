import React, { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Loader } from "../components/Loader";

const RecipeSearchScreen = ({ route, navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

  const getRecipes = async () => {
    if (searchTerm === "") {
      alert("Please enter a search term.");
      return;
    }

    if (isLoading) return <Loader />;
    try {
      const response = await fetch(url + searchTerm);
      const result = await response.json();
      if (result === null || result.meals === null) {
        Alert.alert(
          "Not found",
          "No recipes were found with the key word " +
            searchTerm +
            "\nPlease ensure that you entered the keyword correctly.",
          [{ text: "OK" }],
        );
        return;
      }
      console.log(result);
      setData(result.meals || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const renderRecipeItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details", { id: item.idMeal })}
    >
      <View style={styles.recipeItem}>
        <Text style={styles.recipeName}>{item.strMeal}</Text>
        <Image source={{ uri: item.strMealThumb }} style={styles.recipeImage} />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flatlistContainer}>
        <FlatList
          data={data}
          renderItem={renderRecipeItem}
          keyExtractor={(item) => item.idMeal.toString()}
          style={styles.recipeList}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Search for recipes..."
        value={searchTerm}
        onChangeText={setSearchTerm}
        autoCapitalize={"none"}
      />
      <Button title="Search" onPress={getRecipes} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F4F4F4",
    padding: 16,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  recipeList: {
    flex: 1,
  },
  recipeItem: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  recipeName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  recipeImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  flatlistContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#ccc",
  },
});

export default RecipeSearchScreen;
