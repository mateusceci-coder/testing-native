import { View, Image, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function ArtistProfileContainer() {
  return (
    <View className="p-4 rounded-xl flex-row bg-white justify-between">
      <View className="gap-2">
        <Image
          source={require("../../../public/profile.png")}
          className="h-20 w-20"
        />
        <Text className="font-bold">Zé da tainha</Text>
      </View>
      <View className="gap-1">
        <View className="border-b-2">
          <Text className="font-bold">302</Text>
          <Text className="font-bold">Reviews</Text>
        </View>
        <View>
          <View className="flex-row gap-2 items-center">
            <Text className="font-bold">5,0</Text>
            <FontAwesome name="star" size={28} color="#EEAD2D" />
          </View>
          <Text>Avaliação</Text>
        </View>
      </View>
    </View>
  );
}
