import { View, Image, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TattooContainer() {
  return (
    <View className="mt-10">
      <Image
        source={require("../../public/tattoo-search.png")}
        className="rounded-xl w-[420px]"
      />
      <View className="flex-row">
        <View className="flex-row gap-8 items-center justify-between flex-1">
          <View className="flex-row items-center gap-1 ">
            <Image source={require("../../public/profile.png")} className="h-20 w-20" />
            <View>
              <Text className="font-bold text-xl">Zé da Tainha</Text>
              <Text>
                <Text className="font-bold">Especialidade:</Text> Blackwork,
                Oriental
              </Text>
              <Text>
                <Text className="font-bold">Tattoo:</Text> Fechamento de braço
                estilo oriental
              </Text>
              <Text>
                <Text className="font-bold">Preço:</Text>R$ 1200
              </Text>
            </View>
          </View>
          <View>
            <FontAwesome name="star" size={28} color="#EEAD2D" />
            <Text className="text-xl font-bold">5,0</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
