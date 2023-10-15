import { Button, Icon, ListItem } from "@rneui/base";
import { CustomListItemProps } from "./CustomListItem.types";
import { StyleSheet, View } from "react-native";

export function CustomListItem({
  id,
  title,
  subtitle,
  onRemove,
}: CustomListItemProps) {
  return (
    <ListItem bottomDivider>
      <ListItem.Content style={styles.container}>
        <View style={styles.textContainer}>
          <ListItem.Title>{title}</ListItem.Title>
          <ListItem.Subtitle>{subtitle}</ListItem.Subtitle>
        </View>
        <View style={styles.iconContainer}>
          <Button type="clear" onPress={() => onRemove(id)}>
            <Icon
              name="trash-can-outline"
              type="material-community"
              color="red"
            />
          </Button>
        </View>
      </ListItem.Content>
    </ListItem>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  textContainer: {
    flex: 1,
  },
  iconContainer: {
    marginLeft: 10,
  },
});
