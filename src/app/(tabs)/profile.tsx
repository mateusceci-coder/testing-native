import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ArtistProfilePage from "../../components/Profile/ArtistProfilePage";
import MainProfilePage from "../../components/Profile/MainProfilePage";
import PersonalInformation from "../../components/Profile/PersonalInformation";
import SecurityProfile from "../../components/Profile/SecurityProfile";
import PaymentsProfile from "../../components/Profile/PaymentsProfile";
import PaymentMethods from "../../components/Profile/PaymentMethods";
import LoginPage from "@/components/LoginPage";

export default function Profile() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Perfil">
      <Stack.Screen name="Perfil" component={MainProfilePage} />
      <Stack.Screen name="Perfil do Artista" component={ArtistProfilePage} />
      <Stack.Screen
        name="Informações Pessoais"
        component={PersonalInformation}
      />
      <Stack.Screen name="Login e Segurança" component={LoginPage} />
      <Stack.Screen name="Pagamentos" component={PaymentsProfile} />
      <Stack.Screen name="Formas de Pagamento" component={PaymentMethods} />
    </Stack.Navigator>
  );
}
