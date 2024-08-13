import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ArtistProfilePage from "../../components/Profile/ArtistProfilePage";
import MainProfilePage from "../../components/Profile/MainProfilePage";
import PersonalInformation from "../../components/Profile/PersonalInformation";

export default function Profile() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Perfil">
      <Stack.Screen name="Perfil" component={MainProfilePage} />
      <Stack.Screen name="Perfil do Artista" component={ArtistProfilePage} />
      <Stack.Screen name="Informações Pessoais" component={PersonalInformation} />
    </Stack.Navigator>
  );
}
