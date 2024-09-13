import { View, Text, Image } from "react-native";

export default function AwardsProfile() {
  return (
    <View className="gap-2">
      <View className="border-b-2">
        <Text className="font-bold">Conquistas e Prêmios</Text>
      </View>
      <View className="w-[135px]">
        <View className="border-2 border-gray-500 rounded-xl">
          <Image
            source={require("../../images/trophy.png")}
            resizeMode="contain"
          />
          <View className="p-2">
            <Text className="font-bold text-lg">
              1 lugar na Tattoo Fest Floripa 2023
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
