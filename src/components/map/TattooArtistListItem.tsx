import { Text, View, Image, ViewStyle } from "react-native";
import { AntDesign } from "@expo/vector-icons";

type TattooArtistProps = {
  artist: any;
  containerStyle?: ViewStyle;
};

const TattooArtistListItem = ({
  artist,
  containerStyle,
}: TattooArtistProps) => {
  return (
    <View
      className="bg-white  flex-row rounded-xl overflow-hidden"
      style={containerStyle}
    >
      <Image
        source={{ uri: "https://via.placeholder.com/150" }}
        className="w-[150px] aspect-square"
      />
      <View className="p-2 justify-between">
        <View className="gap-1">
          <View className="flex-row justify-between">
            <Text className="font-bold mb-2">{artist.name}</Text>
            <AntDesign name="hearto" size={16} color="black" />
          </View>
          <Text className="text-sm text-gray-500">{artist.description}</Text>
        </View>
        <View className="gap-2 flex-row items-center">
          <AntDesign name="star" size={16} color="black" />
          <View className="gap-1">
            <Text>
              {artist.rating} ({artist.reviews})
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TattooArtistListItem;
