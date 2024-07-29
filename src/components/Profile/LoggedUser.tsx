import { Image, ScrollView, Text, View } from "react-native";

const LoggedUser = () => {
  return (
    <ScrollView className="p-2">
        <Text className="text-2xl font-bold">Perfil</Text>
        <View className="flex-row justify-between">
          <View className="flex-row">
            <Image source={require("../../../public/ellipse.png")} className="w-16 h-16" />
          </View>
        </View>
    </ScrollView>
  );
};

export default LoggedUser;
