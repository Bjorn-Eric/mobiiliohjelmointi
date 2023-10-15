import "react-native-get-random-values";
import { Alert, FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { useForm } from "react-hook-form";
import { Button, Header, Icon } from "@rneui/base";
import { CustomInput } from "./components/CustomInput";
import { useState } from "react";
import { CustomListItem } from "./components/CustomListItem";
import { v4 as uuidv4 } from "uuid";

export type itemType = {
  id: string;
  title: string;
  subtitle: string;
};

export default function App() {
  const [items, setItems] = useState<itemType[]>([]);
  const formProps = useForm({ defaultValues: { product: "", amount: "" } });
  const { getValues, reset } = formProps;

  const onSavePress = () => {
    const { product, amount } = getValues();

    if (!product || !amount) {
      Alert.alert("Please fill in all fields");
      return;
    }

    setItems([...items, { id: uuidv4(), title: product, subtitle: amount }]);
    reset();
  };

  const onRemove = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header
          centerComponent={{
            text: "SHOPPING LIST",
            style: {
              color: "#fff",
              padding: 5,
              fontSize: 20,
              fontWeight: "bold",
            },
          }}
        />
        <View style={styles.fieldsContainer}>
          <CustomInput
            name="product"
            formProps={formProps}
            placeholder="Product"
            label="Product"
          />
          <CustomInput
            name="amount"
            formProps={formProps}
            placeholder="Amount"
            label="Amount"
          />
        </View>
        <Button onPress={onSavePress}>
          <Icon name="save" color="white" />
          Add
        </Button>
        <View style={styles.flatListContainer}>
          <FlatList
            data={items}
            renderItem={({ item }) => (
              <CustomListItem
                id={item.id}
                title={item.title}
                subtitle={item.subtitle}
                onRemove={onRemove}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  fieldsContainer: {
    marginTop: 20,
  },
  flatListContainer: {
    marginTop: 20,
  },
});
