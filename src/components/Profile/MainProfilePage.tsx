import { View, Text, Image, Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function MainProfilePage({ navigation }) {
  const configuration = [
    {
      page: "Informações Pessoais",
    },
    {
      page: "Login e Segurança",
    },
    {
      page: "Pagamentos",
    },
    {
      page: "Acessibilidade",
    },
    {
      page: "Notificações",
    },
    {
      page: "Privacidade e compartilhamento",
    },
  ];

  return (
    <View className="px-6 my-12">
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
        <Pressable
          className="justify-center"
          onPress={() => navigation.navigate("Perfil do Artista")}
        >
          <MaterialIcons name="keyboard-arrow-right" size={32} color="black" />
        </Pressable>
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
          <Image
            source={require("../../../public/tatu.png")}
            className="w-40 h-40 ml-4"
          />
        </View>
      </View>
      <View className="my-4">
        <Text className="font-bold text-lg mb-4">Configuração</Text>
        {configuration.map((item, index) => (
          <View
            key={index}
            className="flex-row justify-between border-b border-gray-500 items-center p-1"
          >
            <Text className="ml-5 font-bold text-gray-500">{item.page}</Text>
            <Pressable onPress={() => navigation.navigate(item.page)}>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={32}
                color="gray"
              />
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
}
