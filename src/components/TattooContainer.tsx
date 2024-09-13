import { View, Image, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { TattooContainerType } from "@/types/TattooContainerType";

export default function TattooContainer({
  name,
  specialties,
  tattoo,
  price,
  image,
  rating,
  profile,
}: TattooContainerType) {
  return (
    <View className="items-center mb-8">
      <Image
        source={require("../images/big-Tattoo.png")}
        className="object-contain mb-2"
      />
      <View className="flex-row justify-between items-center w-full">
        <View className="flex-row gap-1">
          <Image
            source={require("../images/profile.png")}
            className="w-20 h-20 rounded-full"
          />
          <View>
            <Text className="font-bold">{name}</Text>
            <Text>
              <Text className="font-bold">Especialidades:</Text> {specialties}
            </Text>
            <Text>
              <Text className="font-bold">Tattoo:</Text> {tattoo}
            </Text>
            <Text>
              <Text className="font-bold">Preço:</Text> R$ {price}
            </Text>
          </View>
        </View>
        <View className="items-center">
          <AntDesign name="star" size={32} color="#EEAD2D" />
          <Text className="font-bold text-xl">{rating}</Text>
        </View>
      </View>
    </View>
  );
}
