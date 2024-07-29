import { View, Text, ScrollView, Image } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Wishlist() {
  return (
    <ScrollView className="px-6 my-12">
      <Text className="text-3xl font-bold mb-12">Perfil</Text>
      <View className="flex-row justify-between mb-8">
        <View className="flex-row">
          <Image
            source={require("../../../public/ellipse.png")}
            className="w-16 h-16"
          />
          <View className="ml-4">
            <Text className="text-lg mb-1">João Manezinho</Text>
            <Text className="text-sm text-gray-500">Mostrar Perfil</Text>
          </View>
        </View>
        <View className="justify-center">
          <MaterialIcons name="keyboard-arrow-right" size={32} color="black" />
        </View>
      </View>
      <View className="py-6 border-y border-gray-500">
        <View className="justify-between flex-row p-4 border border-gray-400 rounded-xl">
          <View className="flex-1">
            <Text className="text-lg font-bold mb-2">
              Anuncie suas tatuagens no TattuInk
            </Text>
            <Text className="font-bold text-gray-500">
              É fácil transformar sua arte em dinheiro
            </Text>
          </View>
            <Image source={require("../../../public/tatu.png")} className="w-40 h-40 ml-4" />
        </View>
      </View>
    </ScrollView>
  );
}
