import { View, Image, Text, ImageSourcePropType } from "react-native";
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
  like,
}: TattooContainerType) {
  return (
    <View className="items-center mb-8">
      <View className="flex items-center">
        <View className="relative">
          <Image
            source={image}
            className="rounded-xl mb-2 object-contain"
            style={{ resizeMode: "cover" }}
          />
          <View className="absolute top-2 right-2">
            {like ? (
              <AntDesign name="heart" size={24} color="red" />
            ) : (
              <AntDesign name="hearto" size={24} color="red" />
            )}
          </View>
        </View>
      </View>
      <View className="flex-row justify-between items-center w-full">
        <View className="flex-row gap-1">
          <Image source={profile} className="w-20 h-20 rounded-full" />
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
