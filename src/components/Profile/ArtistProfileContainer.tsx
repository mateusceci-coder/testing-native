import { View, Image, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function ArtistProfileContainer() {
  const artistData = {
    name: "Zé da tainha",
    reviews: 302,
    rating: 5.0,
  };

  return (
    <View className="p-4 rounded-xl flex-row bg-white justify-between">
      <View className="gap-2">
        <Image
          source={require("../../images/profile.png")}
          className="h-20 w-20"
        />
        <Text className="font-bold">{artistData.name}</Text>
      </View>
      <View className="gap-1">
        <View className="border-b-2">
          <Text className="font-bold">{artistData.reviews}</Text>
          <Text className="font-bold">Reviews</Text>
        </View>
        <View>
          <View className="flex-row gap-2 items-center">
            <Text className="font-bold">{artistData.rating}</Text>
            <FontAwesome name="star" size={28} color="#EEAD2D" />
          </View>
          <Text>Avaliação</Text>
        </View>
      </View>
    </View>
  );
}
