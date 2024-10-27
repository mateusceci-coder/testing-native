import { View, Text, FlatList } from "react-native";
import SearchInput from "../../components/SearchInput";
import TattooContainer from "../../components/TattooContainer";
import { dataContainer } from "@/dummyData/dataContainer";

export default function Index() {
  return (
    <View className="flex-1 bg-white px-4">
      <SearchInput />
      <FlatList
        className="w-full px-1"
        data={dataContainer}
        renderItem={({ item }) => <TattooContainer {...item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ alignItems: "center", paddingBottom: 20 }} // Padding to avoid content getting cut off
        showsVerticalScrollIndicator={false} // Optional: to hide the scrollbar
      />
    </View>
  );
}
