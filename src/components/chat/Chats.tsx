import { useNavigation } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

const chatData = [
  {
    id: "1",
    name: "João",
    lastMessage: "Olá, tudo bem?",
    unread: 2,
    time: "10:00",
  },
  {
    id: "2",
    name: "Maria",
    lastMessage: "Oi, tudo bem?",
    unread: 2,
    time: "11:00",
  },
  {
    id: "3",
    name: "Carlos",
    lastMessage: "E aí, tudo bem?",
    unread: 0,
    time: "12:00",
  },
];

export default function Chats() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Chat", { chatId: item.id, name: item.name })
      }
      className="border-b border-gray-300 p-4 flex-row justify-between"
    >
      <View className="gap-1">
        <Text className="text-lg font-bold">{item.name}</Text>
        <Text>{item.lastMessage}</Text>
      </View>
      <View className="items-center">
        <Text>{item.time}</Text>
        {item.unread > 0 && (
          <View className="bg-blue-500 rounded-xl p-1 h-6 min-w-[24px] items-center">
            <Text className="text-white text-xs">{item.unread}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 px-4">
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
