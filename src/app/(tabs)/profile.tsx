import { View, Text, Image, ScrollView } from "react-native";
import ArtistProfileContainer from "../../components/Profile/ArtistProfileContainer";
import AwardsProfile from "../../components/Profile/AwardsProfile";
import ReviewsProfile from "../../components/Profile/ReviewsProfile";

export default function Profile() {
  return (
    <ScrollView className="flex-1 p-4 mt-10">
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
      <AwardsProfile />
      <ReviewsProfile />
    </ScrollView>
  );
}
