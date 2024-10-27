import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chats from "@/components/chat/Chats";
import Chat from "@/components/chat/Chat";

const Stack = createNativeStackNavigator();

export default function ChatScreen() {
  return (
    <Stack.Navigator initialRouteName="Chats">
      <Stack.Screen name="Chats" component={Chats} />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={({ route }) => ({ title: route.params?.name } || "Chat")}
      />
    </Stack.Navigator>
  );
}
