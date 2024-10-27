import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function Chat() {
  const route = useRoute();
  const { chatId, name } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{name}</Text>
      {/* Aqui você pode renderizar as mensagens do chat específico */}
      <Text>ID do Chat: {chatId}</Text>
    </View>
  );
}
