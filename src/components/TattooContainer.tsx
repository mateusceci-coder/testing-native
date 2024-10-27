import { View, Image, Text, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { TattooContainerType } from "../lib/types";
import Animated, { FadeInRight, FadeOutLeft } from "react-native-reanimated";

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
    <TouchableOpacity>
      <Animated.View
        entering={FadeInRight}
        exiting={FadeOutLeft}
        className="p-4 gap-2 my-4"
      >
        <View className="relative w-full h-[180px] mb-2">
          {like ? (
            <TouchableOpacity className="absolute top-5 right-5 z-10">
              <FontAwesome name="heart" size={24} color="red" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity className="absolute top-5 right-5 z-10">
              <Entypo name="heart-outlined" size={24} color="black" />
            </TouchableOpacity>
          )}
          <Image source={image} className="rounded-xl w-full h-full" />
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
      </Animated.View>
    </TouchableOpacity>
  );
}
