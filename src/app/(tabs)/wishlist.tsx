import { ScrollView, Text, View } from "react-native";
import TattooContainer from "../../components/TattooContainer";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import { dataContainer } from "@/dummyData/dataContainer";

export default function Wishlist() {
  const wishlistItems = dataContainer.filter((item) => item.like);

  return (
    <ScrollView className="flex-1 mt-12 px-4">
      <View className="flex-row justify-between mb-12 items-center">
        <Text className="text-2xl font-bold">Favoritos</Text>
        <View className="flex-row gap-2">
          <FontAwesome name="filter" size={24} color="black" />
          <Entypo name="magnifying-glass" size={24} color="black" />
        </View>
      </View>
      {wishlistItems.map((item) => (
        <TattooContainer key={item.id} {...item} />
      ))}
    </ScrollView>
  );
}
