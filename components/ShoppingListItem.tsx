import { Text, TouchableOpacity, View, Alert, StyleSheet } from "react-native"
import { theme } from "../theme"
import EvilIcons from '@expo/vector-icons/EvilIcons';

type Props = {
  name: string;
  isCompleted?: boolean;
}

export function ShoppingListItem({ name, isCompleted }: Props) {
    const handleDelete = () => {
        Alert.alert(
          `Are you sure you want to delete ${name}?`, 
          "It will be gone for good",
          [
            {
              text: "Yes",
              onPress: () => console.log("Yes"),
              style: "destructive",
            },
            {
              text: "Cancel",
              style: "cancel",
            },
          ]
        )
    };

  return (
    <View style={[styles.itemContainer, isCompleted ? styles.completedContainer : undefined]}>
      <Text style={[styles.itemText, isCompleted ? styles.completedItemText : undefined]}>{name}</Text>
      <TouchableOpacity 
          activeOpacity={0.8} 
          onPress={handleDelete}
      >
        <EvilIcons name="close-o" size={24} color={isCompleted ? theme.colorGrey : theme.colorRed} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    itemContainer: {
      borderBottomWidth: 1,
      borderBottomColor: theme.colorCerulian,
      paddingHorizontal: 18,
      paddingVertical: 16,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    completedContainer: {
      backgroundColor: theme.colorLightGrey,
      borderBottomColor: theme.colorLightGrey,
    },
    itemText: {
      fontSize: 18,
      fontWeight: "200",
    },
    completedItemText: {
      textDecorationLine: "line-through",
      textDecorationColor: theme.colorGrey,
      color: theme.colorGrey,
    },
  });
