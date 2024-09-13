import { View, Text, Image } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function ReviewsProfile() {
  return (
    <View className="gap-2 my-4">
      <View className="border-b-2">
        <Text className="font-bold">Avaliação</Text>
      </View>
      <View className="flex-row justify-between ">
        <View className="flex-row gap-1 max-w-[60%]">
          <Image
            source={require("../../images/review1.png")}
            className="h-20 w-20"
          />
          <View>
            <Text className="font-bold">Amanda Schunck</Text>
            <Text>
              Tenho 30 anos, trabalho com black-art, linhas finas. Ganhei 5
              prêmios de melhor tattoo no PIPIPI POPOPO
            </Text>
          </View>
        </View>
        <View className="flex-row gap-1 items-center justify-center">
          <Text className="font-bold">5,0</Text>
          <FontAwesome name="star" size={28} color="#EEAD2D" />
        </View>
      </View>
      <View className="flex-row justify-between">
        <View className="flex-row gap-1 max-w-[60%]">
          <Image
            source={require("../../images/review2.png")}
            className="h-20 w-20"
          />
          <View>
            <Text className="font-bold">Amanda Schunck</Text>
            <Text>
              Tenho 30 anos, trabalho com black-art, linhas finas. Ganhei 5
              prêmios de melhor tattoo no PIPIPI POPOPO
            </Text>
          </View>
        </View>
        <View className="flex-row gap-1 items-center justify-center">
          <Text className="font-bold">5,0</Text>
          <FontAwesome name="star" size={28} color="#EEAD2D" />
        </View>
      </View>
    </View>
  );
}
