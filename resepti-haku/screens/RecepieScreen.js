import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { Loader } from "../components/Loader";

export default function RecipeDetailsScreen({ route, navigation }) {
  const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getRecipeDetails = async () => {
    try {
      const data = await fetch(url + route.params.id);
      const result = await data.json();
      console.log(result);
      setData(result.meals[0]);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getRecipeDetails();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{data.strMeal}</Text>
      <Image source={{ uri: data.strMealThumb }} style={styles.image} />
      <View style={styles.ingredientsContainer}>
        <ScrollView>
          <Text>{data.strIngredient1}</Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F4F4F4",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 8,
    marginTop: 16,
  },
  ingredientsContainer: {
    marginTop: 16,
    backgroundColor: "grey",
  },
});
