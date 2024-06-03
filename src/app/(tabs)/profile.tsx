import { View, Text, Image } from "react-native";
import ArtistProfileContainer from "../../components/ArtistProfileContainer";

export default function Profile() {
  return (
    <View className="flex-1 p-4 mt-10">
      <ArtistProfileContainer />
      <View className="my-10">
        <View className="gap-2 mb-4">
          <View className="border-b-2">
            <Text className="font-bold">Descrição</Text>
          </View>
          <Text>
            Tenho 30 anos, trabalho com black-art, linhas finas. Ganhei 5
            prêmios de melhor tattoo no PIPIPI POPOPO
          </Text>
        </View>
        <View className="gap-2 mb-4">
          <Text className="font-bold">Idiomas</Text>
          <Text>Português, Inglês, Francês e Espanhol</Text>
        </View>
        <View className="gap-2 mb-10">
          <Text className="font-bold">Localização</Text>
          <Text>Florianópolis - SC</Text>
        </View>
      </View>
      <View className="gap-2">
        <View className="border-b-2">
          <Text className="font-bold">Conquistas e Prêmios</Text>
        </View>
        <View className="border-2 border-gray-500 rounded-xl">
          <Image
            source={require("../../../public/trophy.png")} />
          <View className="p-2">
            <Text className="font-bold text-lg">1o lugar na Tattoo Fest Floripa 2023</Text>
          </View>

        </View>
      </View>
    </View>
  );
}
