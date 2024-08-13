import { StyleSheet, TextInput, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function SearchInput() {
  return (
    <View className="mt-12 p-2">
      <Text className="font-bold ml-2 mb-2">Estilo de tatuagem</Text>
      <View className="flex-row items-center gap-3">
        <View
          className="rounded-full border border-gray-300 bg-white p-3 w-10/12 flex-row items-center gap-1"
          style={styles.shadow}
        >
          <View className="flex-row">
            <MaterialIcons name="search" size={24} color="black" />
            <TextInput placeholder="Colorida, Linhas finas, Oriental, Blackwork... " />
          </View>
        </View>
        <FontAwesome name="filter" size={32} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 7,
  },
});
